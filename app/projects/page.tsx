import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center opacity-95 brightness-90 saturate-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-neutral-950/30 to-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_32%)]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Project Archive
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              项目实践
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              记录我在云计算、AI 工程、机器人与自动化方向的项目实践与阶段性成果。
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/[0.12] bg-white/[0.075] p-7 text-center shadow-xl shadow-black/15 backdrop-blur-2xl">
            <p className="text-sm leading-7 text-neutral-300">
              按时间记录项目，从部署实践到自动化系统仿真，持续整理工程能力。
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-400">
              <span>{projects.length} 个项目</span>
              <span className="h-1 w-1 rounded-full bg-neutral-500" />
              <span>Cloud Computing</span>
              <span className="h-1 w-1 rounded-full bg-neutral-500" />
              <span>Robotics & Automation</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="/#projects"
              className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.12]"
            >
              返回首页项目区
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
