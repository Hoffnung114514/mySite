import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-white/[0.12] bg-white/[0.075] p-7 shadow-xl shadow-black/15 backdrop-blur-2xl transition hover:bg-white/[0.095]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
          {article.displayDate}
        </p>
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-neutral-200 backdrop-blur-xl">
          {article.status}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {article.title}
      </h3>
      <p className="mt-3 text-sm font-medium text-neutral-400">
        {article.category}
      </p>
      <p className="mt-5 flex-1 text-sm leading-7 text-neutral-300">
        {article.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-xl"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={article.href}
        className="mt-8 inline-flex text-sm font-semibold text-white"
      >
        阅读文章
      </a>
    </article>
  );
}
