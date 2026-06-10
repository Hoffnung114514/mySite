import { getProjects } from "@/lib/projects";

export type { ProjectMetadata as Project } from "@/lib/projects";

export const projects = getProjects();
