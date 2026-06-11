import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getArticles();

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
              Technical Notes
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              技术文章
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              整理云计算、AI 工程、机器人与自动化方向的学习路线、实践经验和阶段性总结。
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/[0.12] bg-white/[0.075] p-7 text-center shadow-xl shadow-black/15 backdrop-blur-2xl">
            <p className="text-sm leading-7 text-neutral-300">
              按时间记录技术文章，从基础学习到项目实践，持续整理可复用的技术笔记。
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-400">
              <span>{articles.length} 篇文章</span>
              <span className="h-1 w-1 rounded-full bg-neutral-500" />
              <span>Cloud Computing</span>
              <span className="h-1 w-1 rounded-full bg-neutral-500" />
              <span>AI Engineering</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="/#articles"
              className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.12]"
            >
              返回首页文章区
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
