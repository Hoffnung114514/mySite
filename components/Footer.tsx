export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} 周晓乐 / Alfred Zhou. All rights reserved.</p>
        <p>基于 Next.js、TypeScript 与 Tailwind CSS 构建。</p>
      </div>
    </footer>
  );
}
