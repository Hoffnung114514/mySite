import type { ComponentType } from "react";
import AiEngineeringNotes, {
  metadata as aiEngineeringNotesMetadata
} from "@/content/articles/ai-engineering-notes.mdx";
import CloudComputingRoadmap, {
  metadata as cloudComputingRoadmapMetadata
} from "@/content/articles/cloud-computing-roadmap.mdx";
import RoboticsAutomationSummary, {
  metadata as roboticsAutomationSummaryMetadata
} from "@/content/articles/robotics-automation-summary.mdx";

export type ArticleMetadata = {
  id: string;
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  status: string;
  tags: string[];
  summary: string;
  href: string;
};

type ArticleContentMetadata = Omit<ArticleMetadata, "href">;

export type ArticleEntry = {
  metadata: ArticleMetadata;
  Component: ComponentType;
};

function withHref(metadata: ArticleContentMetadata): ArticleMetadata {
  return {
    ...metadata,
    href: `/articles/${metadata.slug}`
  };
}

const articleRegistry: ArticleEntry[] = [
  {
    metadata: withHref(cloudComputingRoadmapMetadata as ArticleContentMetadata),
    Component: CloudComputingRoadmap
  },
  {
    metadata: withHref(aiEngineeringNotesMetadata as ArticleContentMetadata),
    Component: AiEngineeringNotes
  },
  {
    metadata: withHref(
      roboticsAutomationSummaryMetadata as ArticleContentMetadata
    ),
    Component: RoboticsAutomationSummary
  }
];

export function getArticles() {
  return [...articleRegistry]
    .map((entry) => entry.metadata)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getArticleBySlug(slug: string) {
  return articleRegistry.find((entry) => entry.metadata.slug === slug);
}

export function getArticleStaticParams() {
  return articleRegistry.map((entry) => ({ slug: entry.metadata.slug }));
}
