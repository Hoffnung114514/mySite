import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-lg border border-slate-700/50 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30">
      <p className="text-sm font-medium text-cyan-300">{article.date}</p>
      <h3 className="mt-4 text-xl font-semibold text-white">{article.title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-300">{article.summary}</p>
      <a href={article.href} className="mt-6 inline-flex text-sm font-semibold text-cyan-300">
        阅读文章
      </a>
    </article>
  );
}
