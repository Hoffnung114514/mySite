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
    description: "云平台部署、Linux 基础、Vercel、GitHub 工作流与 Web 服务发布。",
    icon: "01"
  },
  {
    title: "AI 工程",
    label: "AI Engineering",
    description: "AI 工具应用、模型能力调用、自动化流程与工程化实践。",
    icon: "02"
  },
  {
    title: "机器人技术",
    label: "Robotics",
    description: "RobotStudio 仿真、工业机器人轨迹规划、搬运码垛工作站搭建。",
    icon: "03"
  },
  {
    title: "自动化系统",
    label: "Automation",
    description: "PLC 控制、I/O 信号、传送带系统与自动化生产流程设计。",
    icon: "04"
  }
];
