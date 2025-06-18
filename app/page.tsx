import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="font-black text-xl mb-8">Welcome to TFT Guides</h1>
      <div className="flex flex-col sm:flex-row sm:gap-8 gap-4">
        <Link
          href="/tierlist"
          className="flex flex-col gap-4 w-full min-h-[360px] sm:w-[288px] rounded-lg overflow-hidden bg-amber-700"
        >
          <Image
            src="/assets/images/alune.jpg"
            width={360}
            height={360}
            className="w-full h-auto"
            alt="alune tft"
          />
          <h2 className="px-4">Tierlist Đội Hình</h2>
          <p className="text-xs p-4 pt-0">
            Những đội hình mạnh nhất meta được build bởi các nhà vô địch thế
            giới.
          </p>
        </Link>
        <Link
          href="/champions"
          className="flex flex-col gap-4 w-full min-h-[360px] sm:w-[288px] rounded-lg overflow-hidden bg-sky-500"
        >
          <Image
            src="/assets/images/seraphine.jpg"
            width={360}
            height={360}
            className="w-full h-auto"
            alt="seraphine tft"
          />
          <h2 className="px-4">Tướng, Tộc Hệ, Nâng Cấp và Trang Bị</h2>
          <p className="text-xs p-4 pt-0">
            Xem chi tiết tướng, tộc hệ, nâng cấp, trang bị trong bản TFT mới
            nhất.
          </p>
        </Link>
        <div className="flex flex-col gap-4 w-full min-h-[360px] sm:w-[288px] rounded-lg overflow-hidden bg-green-400">
          <Image
            src="/assets/images/aurelion-sol.jpg"
            width={360}
            height={360}
            className="w-full h-auto"
            alt="aurelion-sol tft"
          />
          <h2 className="px-4">Và còn nhiều thứ khác...</h2>
          <p className="text-xs p-4 pt-0">
            Và còn nhiều tính năng vô cùng hấp dẫn sắp ra mắt.
          </p>
        </div>
      </div>
    </>
  );
}
