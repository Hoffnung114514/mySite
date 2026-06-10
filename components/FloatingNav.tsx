"use client";

import { useEffect, useState } from "react";

const floatingNavItems = [
  { label: "首页", href: "#home" },
  { label: "项目", href: "#projects" },
  { label: "文章", href: "#articles" },
  { label: "联系", href: "#contact" }
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");

    if (!sentinel || !("IntersectionObserver" in window)) {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 80);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="首页快速导航"
      className={`fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-white/10 bg-white/[0.08] p-2 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 ease-out lg:flex ${
        isVisible
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-3 opacity-0 pointer-events-none"
      }`}
    >
      {floatingNavItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="rounded-full px-3 py-2 text-xs font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
