import type { Metadata } from "next";
import { Nunito_Sans, Nunito } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito-sans",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Hướng dẫn DTCL | TFT Guide",
  description:
    "Hướng dẫn xây dựng đội hình, mẹo chơi và thông tin chi tiết về Tướng, Tộc Hệ, Nâng Cấp và Trang Bị trong TFT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${nunito.variable} antialiased`}
    >
      <body className="flex flex-col justify-between text-base max-w-screen-lg m-auto min-h-screen">
        <Nav />
        <main className="mt-15 p-2 md:p-4">{children}</main>
        <footer className="mt-5 p-4 text-sm text-gray-400 text-justify">
          <p>
            TFTguide không được Riot Games xác nhận và không phản ánh quan điểm
            hay ý kiến của Riot Games hoặc bất kỳ cá nhân/tổ chức nào tham gia
            vào việc phát triển, sản xuất hoặc quản lý League of Legends. League
            of Legends và Riot Games là thương hiệu hoặc nhãn hiệu đã đăng ký
            của © Riot Games, Inc.
          </p>
        </footer>
        <ToastContainer position="bottom-left" autoClose={2000} theme="dark" />
      </body>
      <GoogleAnalytics gaId="G-FE7ZMBTWRP" />
    </html>
  );
}
