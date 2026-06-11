import { getArticles } from "@/lib/articles";

export type { ArticleMetadata as Article } from "@/lib/articles";

export const articles = getArticles();
