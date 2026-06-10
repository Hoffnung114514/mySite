import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-white/[0.12] bg-white/[0.075] p-7 shadow-xl shadow-black/15 backdrop-blur-2xl transition hover:bg-white/[0.095]">
      <p className="text-sm font-medium text-neutral-500">{article.date}</p>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {article.title}
      </h3>
      <p className="mt-5 flex-1 text-sm leading-7 text-neutral-300">{article.summary}</p>
      <a href={article.href} className="mt-8 inline-flex text-sm font-semibold text-white">
        阅读文章
      </a>
    </article>
  );
}
