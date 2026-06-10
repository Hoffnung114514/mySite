import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfred Zhou / 周晓乐",
  description:
    "Alfred Zhou / 周晓乐的个人技术主页，记录云计算、AI 工程、机器人技术与自动化系统方向的项目、文章与技术成长。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
