import PersonalWebsite, {
  metadata as personalWebsiteMetadata
} from "@/content/projects/personal-website.mdx";
import RobotstudioPalletizing, {
  metadata as robotstudioPalletizingMetadata
} from "@/content/projects/robotstudio-palletizing.mdx";
import MatlabWorkspaceAnalysis, {
  metadata as matlabWorkspaceAnalysisMetadata
} from "@/content/projects/matlab-workspace-analysis.mdx";

export type ProjectMetadata = {
  id: string;
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  status: string;
  cover?: string;
  tags: string[];
  summary: string;
};

export type ProjectEntry = {
  metadata: ProjectMetadata;
  Component: React.ComponentType;
};

const projectRegistry: ProjectEntry[] = [
  {
    metadata: personalWebsiteMetadata as ProjectMetadata,
    Component: PersonalWebsite
  },
  {
    metadata: robotstudioPalletizingMetadata as ProjectMetadata,
    Component: RobotstudioPalletizing
  },
  {
    metadata: matlabWorkspaceAnalysisMetadata as ProjectMetadata,
    Component: MatlabWorkspaceAnalysis
  }
];

export function getProjects() {
  return [...projectRegistry]
    .map((entry) => entry.metadata)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getProjectBySlug(slug: string) {
  return projectRegistry.find((entry) => entry.metadata.slug === slug);
}

export function getProjectSlugs() {
  return projectRegistry.map((entry) => entry.metadata.slug);
}
