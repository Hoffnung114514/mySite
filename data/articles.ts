export type Article = {
  title: string;
  summary: string;
  date: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: "云计算学习路线记录",
    summary: "记录 Linux 基础、GitHub 工作流、Vercel 部署与云平台服务发布的学习过程。",
    date: "2026-06-10",
    href: "#"
  },
  {
    title: "AI 工程实践笔记",
    summary: "整理 AI 工具应用、模型能力调用、工程化实践和自动化工作流中的经验。",
    date: "2026-06-10",
    href: "#"
  },
  {
    title: "机器人与自动化系统总结",
    summary: "总结工业机器人仿真、PLC 控制、I/O 信号和自动化生产流程相关内容。",
    date: "2026-06-10",
    href: "#"
  }
];
