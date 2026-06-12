import { ProfileConsole } from "@/components/ProfileConsole";

const focusTags = [
  "Cloud Computing",
  "AI Engineering",
  "Robotics",
  "Automation"
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl gap-12 overflow-hidden px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
    >
      <div className="pointer-events-none absolute left-6 top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-8 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-6 top-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative max-w-4xl">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-300 shadow-lg shadow-black/10 backdrop-blur-2xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-200" />
          </span>
          个人技术主页
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
            Alfred Zhou
          </p>
          <h1 className="mt-3 text-6xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
            周晓乐
          </h1>
          <p className="mt-4 max-w-2xl text-2xl font-medium text-neutral-300 sm:text-3xl">
            面向云计算、AI 工程与自动化系统的技术实践主页
          </p>
        </div>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
          记录项目、文章与技术成长，将自动化背景与云计算、AI
          工程能力连接起来。
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {focusTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-neutral-200 shadow-sm shadow-black/10 backdrop-blur-xl transition hover:border-cyan-200/40 hover:bg-cyan-200/10 hover:text-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-white/20"
          >
            查看项目
          </a>
          <a
            href="#articles"
            className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.12]"
          >
            阅读文章
          </a>
          <a
            href="https://github.com/Hoffnung114514"
            className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.12]"
          >
            访问 GitHub
          </a>
        </div>
      </div>

      <ProfileConsole />
    </section>
  );
}
