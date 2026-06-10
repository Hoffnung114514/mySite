import type { TechItem } from "@/data/techStack";

type TechCardProps = {
  item: TechItem;
};

export function TechCard({ item }: TechCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/[0.12] bg-white/[0.075] p-6 shadow-xl shadow-black/15 backdrop-blur-2xl transition hover:bg-white/[0.095]">
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-sm font-semibold text-neutral-950">
        {item.icon}
      </div>
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
        {item.label}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-300">{item.description}</p>
    </article>
  );
}
