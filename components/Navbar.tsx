const navItems = [
  { label: "首页", href: "#" },
  { label: "项目", href: "#projects" },
  { label: "文章", href: "#articles" },
  { label: "联系", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/40 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold text-slate-100">
          周晓乐 / Alfred Zhou
        </a>
        <div className="flex items-center gap-1 rounded-lg border border-slate-700/50 bg-slate-900/70 p-1 shadow-lg shadow-slate-950/20">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-sky-400/10 hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
