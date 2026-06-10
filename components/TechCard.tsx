import type { TechItem } from "@/data/techStack";

type TechCardProps = {
  item: TechItem;
};

export function TechCard({ item }: TechCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-900/80">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-200">
        {item.icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
        {item.label}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
    </article>
  );
}
