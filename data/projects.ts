export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "个人网站部署实践",
    description: "基于 Next.js、GitHub 和 Vercel 构建并部署个人技术展示网站。",
    tags: ["Next.js", "Vercel", "GitHub"],
    href: "#"
  },
  {
    title: "RobotStudio 搬运码垛工作站",
    description:
      "使用 RobotStudio 搭建机器人搬运与码垛工作站，包含传送带、夹具和 I/O 信号控制。",
    tags: ["RobotStudio", "RAPID", "Automation"],
    href: "#"
  },
  {
    title: "MATLAB 机器人工作空间分析",
    description: "使用 MATLAB 绘制机器人运动空间图，并进行轨迹与结构分析。",
    tags: ["MATLAB", "Robotics", "Simulation"],
    href: "#"
  }
];
