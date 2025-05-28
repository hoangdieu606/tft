const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const { default: PQueue } = require('p-queue');

const SET_NUMBER = 14;

async function getCurrentSet() {
  try {
    const data = await fs.readFile('set-revival.json', 'utf8');
    return JSON.parse(data).set || '0';
  } catch (error) {
    return '0';
  }
}

async function saveCurrentSet(set) {
  await fs.writeFile('set-revival.json', JSON.stringify({ set }, null, 2)); // Định dạng JSON nhất quán
}

async function downloadImageWithRetry(imageUrl, savePath, retries = 3, delay = 10000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(imageUrl, { responseType: 'stream', timeout: 120000 });
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

async function fetchWithRetry(url, retries = 3, delay = 10000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, { timeout: 120000 });
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Thử lại ${url} lần ${i + 1}/${retries} sau ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

async function processApi(apiUrl, subDir, imageUrlGenerator) {
  const outputDir = `public/assets/images/set${SET_NUMBER}/${subDir}`;
  let successCount = 0;
  let failCount = 0;

  try {
    const response = await fetchWithRetry(apiUrl);
    if (response.status !== 200) {
      console.error(`Gọi API thất bại: ${apiUrl}, status: ${response.status}`);
      return { successCount, failCount };
    }

    const dataKey = subDir === 'champions' ? 'champions' : subDir === 'traits' ? 'traits' : subDir === 'augments' ? 'augments' : 'items';
    const items = response.data[dataKey] || [];

    const images = [];
    items.forEach(item => {
      const imageUrls = imageUrlGenerator(item.apiName);
      images.push(...imageUrls);
    });

    console.log(`Chuẩn bị tải ${images.length} ảnh từ ${apiUrl} vào ${outputDir}...`);
    const queue = new PQueue({ concurrency: 5 });
    await queue.addAll(
      images.map(({ url, filename }) => async () => {
        const savePath = path.join(outputDir, filename);
        const success = await downloadImageWithRetry(url, savePath);
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
  const currentSet = await getCurrentSet();
  const newSet = `${SET_NUMBER}`;

  if (newSet === currentSet) {
    console.log('Set không thay đổi, bỏ qua tải assets');
    return; // Thoát sớm, không ghi đè set-revival.json
  }

  console.log(`Phát hiện set: ${newSet}. Bắt đầu tải assets...`);
  const baseDir = `public/assets/images/set${SET_NUMBER}`;
  await fs.rm(baseDir, { recursive: true, force: true }).catch(() => {});
  await fs.mkdir(baseDir, { recursive: true });

  const apiConfigs = [
    {
      url: `https://tftacademy.com/api/assets/champions?set=${SET_NUMBER}`,
      subDir: 'champions',
      imageUrlGenerator: (apiName) => [
        {
          url: `https://assets.tftacademy.com/champions/champion_icons/${apiName}.webp`,
          filename: `${apiName}.webp`
        },
        {
          url: `https://assets.tftacademy.com/champions/champion_abilities/${apiName}.webp`,
          filename: `ability_${apiName}.webp`
        }
      ]
    },
    {
      url: `https://tftacademy.com/api/assets/traits?set=${SET_NUMBER}`,
      subDir: 'traits',
      imageUrlGenerator: (apiName) => [{
        url: `https://assets.tftacademy.com/traits/${apiName}.webp`,
        filename: `${apiName}.webp`
      }]
    },
    {
      url: `https://tftacademy.com/api/assets/augments?set=${SET_NUMBER}`,
      subDir: 'augments',
      imageUrlGenerator: (apiName) => [{
        url: `https://assets.tftacademy.com/augments/${apiName}.webp`,
        filename: `${apiName}.webp`
      }]
    },
    {
      url: `https://tftacademy.com/api/assets/items?set=${SET_NUMBER}`,
      subDir: 'items',
      imageUrlGenerator: (apiName) => [{
        url: `https://assets.tftacademy.com/items/${apiName}.webp`,
        filename: `${apiName}.webp`
      }]
    }
  ];

  const response = await fetchWithRetry(apiConfigs[0].url).catch(err => {
    console.error(`Không thể lấy dữ liệu từ API: ${err.message}`);
    return null;
  });
  if (!response) return;

  let totalSuccess = 0;
  let totalFail = 0;
  for (const config of apiConfigs) {
    const { successCount, failCount } = await processApi(config.url, config.subDir, config.imageUrlGenerator);
    totalSuccess += successCount;
    totalFail += failCount;
  }

  console.log(`Tổng kết: ${totalSuccess} ảnh tải thành công, ${totalFail} ảnh thất bại`);
  await saveCurrentSet(newSet);

  // Xuất newSet vào GITHUB_ENV để sử dụng trong bước commit
  require('fs').appendFileSync(process.env.GITHUB_ENV, `SET=${newSet}\n`);
}

main().catch(error => {
  console.error(`Lỗi chính: ${error.message}`);
  process.exit(1);
});
