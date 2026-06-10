const navItems = [
  { label: "首页", href: "/#home" },
  { label: "项目", href: "/#projects" },
  { label: "文章", href: "/#articles" },
  { label: "联系", href: "/#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/#home" className="text-sm font-semibold tracking-wide text-white">
          Alfred Zhou <span className="text-neutral-400">/ 周晓乐</span>
        </a>
        <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/[0.055] p-1 shadow-lg shadow-black/10 sm:w-auto sm:justify-start">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
