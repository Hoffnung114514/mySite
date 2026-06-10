const profileItems = [
  { label: "Profile", value: "Alfred Zhou" },
  { label: "Focus", value: "Cloud Computing / AI Engineering" },
  { label: "Background", value: "Robotics & Automation" },
  { label: "GitHub", value: "Hoffnung114514" }
];

export function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div>
        <p className="mb-7 text-sm font-medium uppercase tracking-[0.24em] text-neutral-400">
          个人技术主页
        </p>
        <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
          Alfred Zhou
        </h1>
        <p className="mt-5 text-2xl font-medium text-neutral-300 sm:text-3xl">
          周晓乐
        </p>
        <h2 className="mt-8 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          面向云计算、AI 工程与自动化系统的技术实践主页
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
          记录项目、文章与技术成长，将自动化背景与云计算、AI 工程能力连接起来。
        </p>
        <p className="mt-6 text-sm font-medium text-neutral-400">
          Cloud Computing · AI Engineering · Robotics · Automation
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            查看项目
          </a>
          <a
            href="#articles"
            className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.12]"
          >
            阅读文章
          </a>
          <a
            href="https://github.com/Hoffnung114514"
            className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.12]"
          >
            访问 GitHub
          </a>
        </div>
      </div>

      <aside className="rounded-[2rem] border border-white/[0.12] bg-white/[0.08] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">
          Profile
        </p>
        <div className="mt-10">
          <p className="text-4xl font-semibold tracking-tight text-white">Alfred Zhou</p>
          <p className="mt-3 text-lg text-neutral-300">周晓乐</p>
        </div>
        <div className="mt-10 grid gap-3">
          {profileItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium text-neutral-100">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-6 text-neutral-400">
          Building technical projects with a focus on practical deployment, AI workflows, and automation systems.
        </p>
      </aside>
    </section>
  );
}
