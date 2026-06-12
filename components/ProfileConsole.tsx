"use client";

import { useState } from "react";

const orbitItems = [
  {
    id: "overview",
    label: "概览",
    title: "个人技术轨道",
    description:
      "围绕云计算、AI 工程、机器人与自动化方向，持续构建个人技术体系。",
    chips: ["Next.js", "MDX", "GitHub", "Vercel"],
    angle: -90
  },
  {
    id: "cloud",
    label: "云计算",
    title: "云计算与部署",
    description:
      "关注 Web 服务部署、GitHub 工作流、Vercel 自动化发布和云端项目管理。",
    chips: ["Vercel", "GitHub", "Deployment", "Linux"],
    angle: 0
  },
  {
    id: "ai",
    label: "人工智能",
    title: "AI 工程实践",
    description:
      "关注 AI 工具使用、工程化工作流、自动化辅助开发和内容系统构建。",
    chips: ["AI Workflow", "Codex", "Automation", "Tools"],
    angle: 90
  },
  {
    id: "automation",
    label: "自动化",
    title: "机器人与自动化",
    description:
      "结合 RobotStudio、MATLAB 和自动化控制基础，整理工程仿真与系统实践。",
    chips: ["RobotStudio", "MATLAB", "Robotics", "PLC"],
    angle: 180
  }
];

const targetAngle = 90;
const orbitRadius = 36;

function getOrbitPosition(angle: number, rotation: number) {
  const rad = ((angle + rotation) * Math.PI) / 180;

  return {
    left: `${50 + Math.cos(rad) * orbitRadius}%`,
    top: `${50 + Math.sin(rad) * orbitRadius}%`
  };
}

function EarthCore({ spinKey }: { spinKey: number }) {
  return (
    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-0 rounded-full bg-cyan-300/15 blur-xl" />
      <svg
        className="relative h-full w-full drop-shadow-[0_0_28px_rgba(34,211,238,0.28)]"
        viewBox="0 0 200 200"
        role="img"
        aria-label="可旋转地球视觉核心"
      >
        <defs>
          <clipPath id="earthClip">
            <circle cx="100" cy="100" r="78" />
          </clipPath>
          <radialGradient id="oceanGradient" cx="34%" cy="30%" r="78%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="44%" stopColor="#0ea5e9" />
            <stop offset="82%" stopColor="#075985" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <radialGradient id="sphereShade" cx="28%" cy="24%" r="78%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
            <stop offset="46%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="78%" stopColor="rgba(2,6,23,0.22)" />
            <stop offset="100%" stopColor="rgba(2,6,23,0.70)" />
          </radialGradient>
          <linearGradient id="atmosphere" x1="32" y1="32" x2="168" y2="168">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#67e8f9" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="83" fill="url(#atmosphere)" opacity="0.7" />
        <circle cx="100" cy="100" r="78" fill="url(#oceanGradient)" />

        <g clipPath="url(#earthClip)">
          <g
            key={spinKey}
            className={
              spinKey > 0 ? "animate-[spin_850ms_ease-out]" : undefined
            }
            style={{ transformOrigin: "100px 100px" }}
          >
            <path
              d="M42 60 C56 42 83 42 96 56 C105 66 95 78 109 86 C121 93 119 110 105 113 C89 117 86 99 72 99 C58 99 45 91 40 77 C38 71 38 65 42 60 Z"
              fill="#22c55e"
              opacity="0.92"
            />
            <path
              d="M116 45 C134 43 153 57 158 75 C163 93 149 105 132 101 C119 98 123 84 112 79 C100 74 101 51 116 45 Z"
              fill="#34d399"
              opacity="0.9"
            />
            <path
              d="M124 116 C142 111 163 124 166 143 C168 158 154 168 137 162 C122 156 110 146 112 132 C113 124 117 119 124 116 Z"
              fill="#16a34a"
              opacity="0.88"
            />
            <path
              d="M54 124 C69 112 90 119 96 136 C101 151 90 162 73 160 C55 158 43 145 46 133 C47 129 50 126 54 124 Z"
              fill="#2dd4bf"
              opacity="0.82"
            />
            <path
              d="M45 45 C68 33 101 29 132 40"
              fill="none"
              stroke="rgba(255,255,255,0.52)"
              strokeLinecap="round"
              strokeWidth="5"
            />
            <path
              d="M57 137 C86 127 117 132 146 149"
              fill="none"
              stroke="rgba(255,255,255,0.34)"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <path
              d="M34 98 C65 86 105 86 157 101"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              d="M69 26 C96 37 128 37 151 28"
              fill="none"
              stroke="rgba(255,255,255,0.46)"
              strokeLinecap="round"
              strokeWidth="6"
            />
            <path
              d="M60 174 C84 164 115 163 142 174"
              fill="none"
              stroke="rgba(255,255,255,0.38)"
              strokeLinecap="round"
              strokeWidth="6"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="52"
              ry="78"
              fill="none"
              stroke="rgba(224,242,254,0.18)"
              strokeWidth="1"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="78"
              ry="28"
              fill="none"
              stroke="rgba(224,242,254,0.16)"
              strokeWidth="1"
            />
          </g>
        </g>

        <circle cx="100" cy="100" r="78" fill="url(#sphereShade)" />
        <path
          d="M55 47 C72 30 107 23 135 36"
          fill="none"
          stroke="rgba(255,255,255,0.36)"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M153 48 C176 74 180 119 157 151"
          fill="none"
          stroke="rgba(2,6,23,0.38)"
          strokeLinecap="round"
          strokeWidth="18"
        />
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="rgba(186,230,253,0.42)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export function ProfileConsole() {
  const [activeId, setActiveId] = useState("overview");
  const [orbitRotation, setOrbitRotation] = useState(
    targetAngle - orbitItems[0].angle
  );
  const [spinKey, setSpinKey] = useState(0);

  const activeItem =
    orbitItems.find((item) => item.id === activeId) ?? orbitItems[0];

  function handleOrbitClick(item: (typeof orbitItems)[number]) {
    setActiveId(item.id);
    setOrbitRotation(targetAngle - item.angle);
    setSpinKey((key) => key + 1);
  }

  return (
    <aside className="relative overflow-hidden rounded-[2.25rem] border border-white/[0.14] bg-slate-950/55 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-4 h-56 w-56 rounded-full bg-violet-300/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.10),transparent_31%),linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] bg-[size:100%_100%,30px_30px,30px_30px] opacity-80" />

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100">
              在线
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-neutral-300">
              系统就绪
            </span>
            <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-medium text-cyan-100">
              技术星系构建中
            </span>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Alfred Zhou
            </p>
            <p className="text-xs font-medium text-neutral-500">周晓乐</p>
          </div>

          <div className="relative mx-auto mt-5 h-64 max-w-[22rem] overflow-hidden sm:h-72">
            <div className="pointer-events-none absolute inset-3 rounded-full border border-cyan-200/15" />
            <div className="pointer-events-none absolute inset-10 rounded-full border border-violet-200/15" />
            <div className="pointer-events-none absolute inset-[4.6rem] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-100/10 to-transparent" />

            {orbitItems.map((item) => {
              const isActive = item.id === activeId;
              const position = getOrbitPosition(item.angle, orbitRotation);

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleOrbitClick(item)}
                  className={`absolute whitespace-nowrap rounded-full border px-3 py-2 text-xs font-semibold backdrop-blur-xl transition-all duration-700 ease-out hover:scale-105 hover:border-cyan-200/50 hover:bg-white/10 ${
                    isActive
                      ? "border-cyan-200/70 bg-cyan-300/15 text-cyan-100 shadow-lg shadow-cyan-500/20"
                      : "border-white/10 bg-white/[0.06] text-slate-300 shadow-lg shadow-black/20 hover:text-white"
                  }`}
                  style={{
                    left: position.left,
                    top: position.top,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <span
                    className={`mr-1 inline-block h-1.5 w-1.5 rounded-full align-middle ${
                      isActive ? "bg-cyan-100" : "bg-current"
                    }`}
                  />
                  {isActive ? "当前 · " : ""}
                  {item.label}
                </button>
              );
            })}

            <EarthCore spinKey={spinKey} />
          </div>

          <div className="mt-3 flex justify-center">
            <div className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-1.5 text-xs font-medium text-cyan-100 shadow-lg shadow-cyan-950/10 backdrop-blur-xl">
              当前轨道：{activeItem.label}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-100/70">
            Active Orbit
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {activeItem.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {activeItem.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {activeItem.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-neutral-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
