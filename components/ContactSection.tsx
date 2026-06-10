const contacts = [
  {
    label: "Email",
    value: "zxl2405774288@gmail.com",
    href: "mailto:zxl2405774288@gmail.com"
  },
  {
    label: "GitHub",
    value: "GitHub Profile",
    href: "#"
  },
  {
    label: "Phone",
    value: "+86 13862300915",
    href: "tel:+8613862300915"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-lg border border-slate-700/50 bg-slate-900/60 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white">联系方式</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              欢迎通过邮件联系我，也可以在这里访问 GitHub 或查看个人电话。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="rounded-lg border border-slate-700/50 bg-slate-800/60 p-5 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <p className="text-sm font-medium text-slate-400">{contact.label}</p>
                <p className="mt-2 break-words text-sm font-semibold text-slate-100">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
