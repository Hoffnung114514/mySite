const profileItems = [
  { label: "Name", value: "Alfred Zhou" },
  { label: "Focus", value: "Cloud Computing / AI Engineering" },
  { label: "GitHub", value: "Hoffnung114514" }
];

export function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-24 lg:pt-24">
      <div>
        <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-950/20">
          个人技术主页
        </div>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          周晓乐
          <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-sky-200 to-violet-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
            Alfred Zhou
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-2xl font-semibold leading-10 text-slate-100">
          面向云计算、AI 工程与自动化系统的技术实践记录
        </p>
        <p className="mt-4 text-base font-medium text-cyan-200/90">
          Cloud Computing · AI Engineering · Robotics · Automation
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
          我关注云计算、人工智能工程与自动化系统方向，正在持续实践云平台部署、AI 工具应用、工业机器人仿真、PLC 控制与前端项目发布。这个网站用于记录我的项目、文章和技术成长过程。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200"
          >
            查看项目
          </a>
          <a
            href="#articles"
            className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-950/20 transition hover:border-cyan-300/50 hover:text-cyan-200"
          >
            阅读文章
          </a>
          <a
            href="https://github.com/Hoffnung114514"
            className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-950/20 transition hover:border-cyan-300/50 hover:text-cyan-200"
          >
            访问 GitHub
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-6">
        <div className="rounded-xl border border-slate-700/60 bg-slate-950/90 p-5 text-slate-100 shadow-inner">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs font-medium text-slate-500">profile.ts</span>
          </div>
          <pre className="overflow-hidden text-sm leading-7 text-slate-300">
            <code>{`const profile = {
  name: "Alfred Zhou",
  focus: "Cloud Computing / AI Engineering",
  background: "Robotics & Automation",
  github: "Hoffnung114514"
};`}</code>
          </pre>
        </div>
        <div className="mt-5 grid gap-3">
          {profileItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-700/50 bg-slate-800/55 p-4"
            >
              <p className="text-xs font-medium uppercase text-slate-400">{item.label}</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
