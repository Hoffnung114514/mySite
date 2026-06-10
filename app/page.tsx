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
          <SectionTitle
            eyebrow="Project Practice"
            title="项目实践"
            description="通过实际项目记录技术学习和工程实现过程。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
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
        </section>

        <section id="articles" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <SectionTitle
            eyebrow="Technical Notes"
            title="技术文章"
            description="整理学习路线、实践经验与阶段性总结。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </section>

        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
