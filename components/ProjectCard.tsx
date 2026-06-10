import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-white/[0.12] bg-white/[0.075] p-7 shadow-xl shadow-black/15 backdrop-blur-2xl transition hover:bg-white/[0.095]">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
        Project
      </p>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-5 flex-1 text-sm leading-7 text-neutral-300">
        {project.description}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-xl"
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={project.href} className="mt-8 text-sm font-semibold text-white">
        查看项目
      </a>
    </article>
  );
}
