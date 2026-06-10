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
