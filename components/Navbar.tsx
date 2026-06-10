const navItems = [
  { label: "首页", href: "#" },
  { label: "项目", href: "#projects" },
  { label: "文章", href: "#articles" },
  { label: "联系", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/40 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          周晓乐 <span className="text-cyan-300">/ Alfred Zhou</span>
        </a>
        <div className="flex w-full items-center justify-between rounded-xl border border-slate-700/50 bg-slate-900/70 p-1 shadow-lg shadow-slate-950/20 sm:w-auto sm:justify-start">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
