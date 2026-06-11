import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getArticleBySlug, getArticleStaticParams } from "@/lib/articles";

type ArticleDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getArticleStaticParams();
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const { metadata, Component } = article;

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center opacity-95 brightness-90 saturate-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-neutral-950/30 to-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_32%)]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <article className="mx-auto max-w-4xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
          <div className="rounded-[2rem] border border-white/[0.12] bg-white/[0.075] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
              <span>{metadata.displayDate}</span>
              <span className="h-1 w-1 rounded-full bg-neutral-500" />
              <span>{metadata.category}</span>
              <span className="h-1 w-1 rounded-full bg-neutral-500" />
              <span>{metadata.status}</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {metadata.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              {metadata.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/[0.12] bg-white/[0.075] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-10">
            <Component />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/articles"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              返回文章列表
            </a>
            <a
              href="/#articles"
              className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.12]"
            >
              返回首页文章区
            </a>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  );
}
