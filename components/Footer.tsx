export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/15 px-6 py-8 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Alfred Zhou / 周晓乐. All rights reserved.</p>
        <p>基于 Next.js、TypeScript 与 Tailwind CSS 构建。</p>
      </div>
    </footer>
  );
}
