import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-700/50 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30">
      <div className="mb-5 h-2 w-16 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400" />
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-cyan-100"
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={project.href} className="mt-6 text-sm font-semibold text-cyan-300">
        查看项目
      </a>
    </article>
  );
}
