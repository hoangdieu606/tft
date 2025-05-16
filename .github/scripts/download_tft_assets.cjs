const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');
const { default: PQueue } = require('p-queue');

async function getCurrentVersion() {
  try {
    const data = await fs.readFile('version.json', 'utf8');
    return JSON.parse(data).version || '0.0';
  } catch (error) {
    return '0.0';
  }
}

async function saveCurrentVersion(version) {
  await fs.writeFile('version.json', JSON.stringify({ version }));
}

async function downloadImageWithRetry(imageUrl, savePath, retries = 5, delay = 10000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(imageUrl, { responseType: 'stream', timeout: 90000 });
      if (response.status === 200) {
        await fs.mkdir(path.dirname(savePath), { recursive: true });
        const writer = require('fs').createWriteStream(savePath);
        response.data.pipe(writer);
        await new Promise((resolve, reject) => {
          writer.on('finish', () => {
            console.log(`Đã tải thành công: ${savePath}`);
            resolve();
          });
          writer.on('error', reject);
        });
        return true;
      } else {
        throw new Error(`Tải thất bại: ${imageUrl}, status: ${response.status}`);
      }
    } catch (error) {
      if (i === retries - 1) {
        console.error(`Lỗi khi tải ${imageUrl} sau ${retries} lần thử: ${error.message}`);
        return false;
      }
      console.log(`Thử lại tải ${imageUrl} lần ${i + 1}/${retries} sau ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

async function fetchWithRetry(url, retries = 5, delay = 10000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, { timeout: 90000 });
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Thử lại ${url} lần ${i + 1}/${retries} sau ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

async function processApi(apiUrl, setNumber, subDir) {
  const outputDir = `public/assets/images/set${setNumber}/${subDir}`;
  let successCount = 0;
  let failCount = 0;

  try {
    const response = await fetchWithRetry(apiUrl);
    if (response.status !== 200) {
      console.error(`Gọi API thất bại: ${apiUrl}, status: ${response.status}`);
      return { successCount, failCount };
    }

    const images = [];
    response.data.data.forEach(item => {
      // API champions: Dùng tileImageUrl thay vì imageUrl
      if (apiUrl.includes('champions')) {
        if (item.tileImageUrl) images.push(item.tileImageUrl);
        if (item.skillImageUrl) images.push(item.skillImageUrl);
      } else {
        // Các API khác (traits, augments, items): Dùng imageUrl
        if (item.imageUrl) images.push(item.imageUrl);
      }
    });

    console.log(`Chuẩn bị tải ${images.length} ảnh từ ${apiUrl} vào ${outputDir}...`);
    const queue = new PQueue({ concurrency: 3 });
    await queue.addAll(
      images.map(imgUrl => async () => {
        const filename = path.basename(url.parse(imgUrl).pathname);
        const savePath = path.join(outputDir, filename);
        const success = await downloadImageWithRetry(imgUrl, savePath);
        if (success) {
          successCount++;
        } else {
          failCount++;
        }
      })
    );
    console.log(`Hoàn tất tải từ ${apiUrl}: ${successCount} thành công, ${failCount} thất bại`);
    return { successCount, failCount };
  } catch (error) {
    console.error(`Lỗi xử lý API ${apiUrl}: ${error.message}`);
    return { successCount, failCount };
  }
}

async function main() {
  const apiConfigs = [
    { url: 'https://tft-api.op.gg/api/v1/meta/champions?hl=vi_VN', subDir: 'champions' },
    { url: 'https://tft-api.op.gg/api/v1/meta/traits?hl=vi_VN', subDir: 'traits' },
    { url: 'https://tft-api.op.gg/api/v1/meta/augments?hl=vi_VN', subDir: 'augments' },
    { url: 'https://tft-api.op.gg/api/v1/meta/items?hl=vi_VN', subDir: 'items' }
  ];

  const response = await fetchWithRetry(apiConfigs[0].url).catch(err => {
    console.error(`Không thể lấy version từ API: ${err.message}`);
    return null;
  });
  if (!response) return;

  const newVersion = response.data.version || '0.0';
  const setNumber = response.data.set;
  const currentVersion = await getCurrentVersion();

  if (newVersion === currentVersion) {
    console.log('Version không thay đổi, bỏ qua tải assets');
    return;
  }

  console.log(`Phát hiện version: ${newVersion}. Bắt đầu tải assets...`);
  const baseDir = `public/assets/images/set${setNumber}`;
  await fs.rm(baseDir, { recursive: true, force: true }).catch(() => {});
  await fs.mkdir(baseDir, { recursive: true });

  let totalSuccess = 0;
  let totalFail = 0;
  for (const { url, subDir } of apiConfigs) {
    const { successCount, failCount } = await processApi(url, setNumber, subDir);
    totalSuccess += successCount;
    totalFail += failCount;
  }

  console.log(`Tổng kết: ${totalSuccess} ảnh tải thành công, ${totalFail} ảnh thất bại`);
  await saveCurrentVersion(newVersion);

  // Xuất newVersion vào GITHUB_ENV để sử dụng trong bước commit
  require('fs').appendFileSync(process.env.GITHUB_ENV, `VERSION=${newVersion}\n`);
}

main().catch(error => {
  console.error(`Lỗi chính: ${error.message}`);
  process.exit(1);
});
