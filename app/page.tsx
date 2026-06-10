import { ArticleCard } from "@/components/ArticleCard";
import { ContactSection } from "@/components/ContactSection";
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
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />

      <section id="tech" className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <SectionTitle
          eyebrow="Focus Areas"
          title="技术方向"
          description="围绕云平台部署、AI 工程实践、机器人仿真与自动化控制，持续积累可以落地的技术能力。"
        />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((item) => (
            <TechCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <SectionTitle
          eyebrow="Project Practice"
          title="项目实践"
          description="整理学习过程中具有代表性的项目实践，后续将扩展为更完整的项目记录与复盘。"
        />
        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="articles" className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <SectionTitle
          eyebrow="Technical Notes"
          title="技术文章"
          description="记录学习路线、实践笔记和项目总结，后续可逐步接入 Markdown / MDX 内容管理。"
        />
        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
