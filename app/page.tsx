import { ArticleCard } from "@/components/ArticleCard";
import { ContactSection } from "@/components/ContactSection";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TechCard } from "@/components/TechCard";
import { articles } from "@/data/articles";
import { projects } from "@/data/projects";
import { techStack } from "@/data/techStack";

export default function Home() {
  const homepageProjects = projects.slice(0, 3);
  const homepageArticles = articles.slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center opacity-95 brightness-90 saturate-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-neutral-950/30 to-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_32%)]" />
      </div>

      <div className="relative z-10">
        <div id="top-sentinel" aria-hidden="true" className="h-px" />
        <Navbar />
        <FloatingNav />
        <Hero />

        <section id="tech" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <SectionTitle
            eyebrow="Focus Areas"
            title="技术方向"
            description="围绕云计算、AI 工程与自动化系统建立长期技术积累。"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((item) => (
              <TechCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="rounded-[2rem] border border-white/[0.12] bg-white/[0.075] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-10">
            <SectionTitle
            eyebrow="Project Practice"
            title="项目实践"
            description="通过实际项目记录技术学习和工程实现过程。"
          />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {homepageProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
            <div className="mt-10 flex justify-center">
            <a
              href="/projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              查看全部项目
            </a>
            </div>
          </div>
        </section>

        <section id="articles" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.075] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-10">
            <div className="pointer-events-none absolute -left-24 top-12 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet-300/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                  Latest Articles
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  最新技术文章
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">
                  整理学习路线、实践经验与阶段性总结，把项目背后的技术思考沉淀下来。
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/25 px-5 py-4 text-sm text-neutral-300 backdrop-blur-xl">
                <span className="font-semibold text-white">
                  {homepageArticles.length}
                </span>{" "}
                篇最新文章
              </div>
            </div>

            <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
              {homepageArticles.map((article) => (
                <ArticleCard key={article.title} article={article} />
              ))}
            </div>

            <div className="relative mt-10 flex justify-center">
              <a
                href="/articles"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-white/20"
              >
                查看全部文章
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
