import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-4 text-base leading-8 text-neutral-300">{children}</p>
    ),
    a: ({ children, ...props }) => {
      const href = typeof props.href === "string" ? props.href : "";
      const isExternal =
        href.startsWith("http://") || href.startsWith("https://");

      return (
        <a
          {...props}
          className={
            isExternal
              ? "font-medium text-cyan-100 border-b border-cyan-200/70 pb-0.5 transition hover:text-cyan-200 hover:border-cyan-100"
              : "font-medium text-white underline underline-offset-4 decoration-white/40 transition hover:text-cyan-200 hover:decoration-cyan-200"
          }
          rel={isExternal ? "noreferrer noopener" : props.rel}
          target={isExternal ? "_blank" : props.target}
        >
          {children}
        </a>
      );
    },
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-neutral-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-8 text-neutral-300">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l border-white/20 pl-5 text-neutral-300">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded-md bg-white/10 px-1.5 py-0.5 text-sm text-neutral-100">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/35 p-5 text-sm text-neutral-200">
        {children}
      </pre>
    ),
    ...components
  };
}
