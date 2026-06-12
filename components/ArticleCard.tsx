import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-white/[0.075] p-7 shadow-xl shadow-black/15 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-white/[0.095] hover:shadow-2xl hover:shadow-cyan-950/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/15" />

      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
          {article.displayDate}
        </p>
        <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-neutral-200 backdrop-blur-xl">
          {article.status}
        </span>
      </div>

      <div className="relative mt-5">
        <p className="text-sm font-medium text-cyan-100/80">
          {article.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          {article.title}
        </h3>
      </div>

      <p className="relative mt-5 flex-1 text-sm leading-7 text-neutral-300">
        {article.summary}
      </p>

      <div className="relative mt-8 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-xl transition group-hover:border-white/15"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={article.href}
        className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-100"
      >
        阅读文章
        <span aria-hidden="true" className="transition group-hover:translate-x-1">
          →
        </span>
      </a>
    </article>
  );
}
