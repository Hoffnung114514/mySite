import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "周晓乐 | Alfred Zhou",
  description:
    "周晓乐 Alfred Zhou 的个人技术主页，记录云计算、AI 工程、机器人技术与自动化系统方向的项目实践、技术文章和学习过程。"
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
