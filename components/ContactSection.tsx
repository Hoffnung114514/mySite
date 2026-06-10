const contacts = [
  {
    label: "Email",
    value: "zxl2405774288@gmail.com",
    href: "mailto:zxl2405774288@gmail.com"
  },
  {
    label: "GitHub",
    value: "Hoffnung114514",
    href: "https://github.com/Hoffnung114514"
  },
  {
    label: "Phone",
    value: "***************",
    href: "#"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="rounded-[2rem] border border-white/[0.12] bg-white/[0.075] p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Contact
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              联系方式
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              欢迎通过邮件或 GitHub 与我联系。电话信息暂不公开。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl transition hover:bg-white/[0.08]"
              >
                <p className="text-sm font-medium text-neutral-500">{contact.label}</p>
                <p className="mt-3 break-words text-sm font-semibold text-white">
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
