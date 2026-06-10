export type TechItem = {
  title: string;
  label: string;
  description: string;
  icon: string;
};

export const techStack: TechItem[] = [
  {
    title: "云计算",
    label: "Cloud Computing",
    description: "关注云平台部署、Linux 基础、Vercel 部署、GitHub 工作流与 Web 服务发布。",
    icon: "CC"
  },
  {
    title: "AI 工程",
    label: "AI Engineering",
    description: "关注 AI 工具应用、模型能力调用、工程化实践与自动化工作流构建。",
    icon: "AI"
  },
  {
    title: "机器人技术",
    label: "Robotics",
    description: "关注工业机器人仿真、RobotStudio 工作站搭建、轨迹规划与搬运码垛应用。",
    icon: "RB"
  },
  {
    title: "自动化系统",
    label: "Automation",
    description: "关注 PLC 控制、I/O 信号、传送带系统与自动化生产流程设计。",
    icon: "IO"
  }
];
