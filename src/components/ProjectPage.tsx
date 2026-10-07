const projects = [
  {
    number: "01",
    title: "Forma",
    category: "Product Design · Development",
    description: "A focused workspace for modern creative teams.",
    color: "bg-[#d7e1d4]",
    accent: "bg-[#205a45]",
    year: "2025",
  },
  {
    number: "02",
    title: "Northline",
    category: "Brand System · Web Experience",
    description: "A bold digital presence for an architecture studio.",
    color: "bg-[#ead8c7]",
    accent: "bg-[#bd6b3d]",
    year: "2024",
  },
  {
    number: "03",
    title: "Luma",
    category: "UI/UX · Frontend",
    description: "Making personal finance feel clear and human.",
    color: "bg-[#cad9d5]",
    accent: "bg-[#143e33]",
    year: "2024",
  },
];

export default function ProjectPage() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 border-b border-[#12382c]/15 pb-10 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#c7723d]">
              Selected projects
            </p>
            <h2 className="font-display text-5xl leading-none font-medium tracking-[-0.05em] sm:text-7xl">
              Work that
              <span className="italic text-[#2e624f]"> matters.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#12382c]/60">
            A selection of digital products shaped by strategy, strong visual systems, and
            careful execution.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {projects.map((project, index) => (
            <article key={project.title} className={index === 2 ? "lg:col-start-2" : ""}>
              <div
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl ${project.color}`}
              >
                <span className="absolute top-6 left-6 z-10 text-xs font-bold tracking-wider text-[#12382c]/55">
                  {project.number} / {project.year}
                </span>
                <div
                  className={`absolute top-1/2 left-1/2 flex h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-[53%] ${project.accent}`}
                >
                  <span className="font-display text-5xl font-medium tracking-[-0.04em] text-white sm:text-7xl">
                    {project.title}
                  </span>
                </div>
                <div className="absolute right-6 bottom-6 grid size-12 place-items-center rounded-full bg-white text-lg text-[#12382c] transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-3xl font-medium tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#12382c]/55">{project.category}</p>
                </div>
                <p className="hidden max-w-[15rem] text-right text-sm leading-6 text-[#12382c]/60 sm:block">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-3xl bg-[#c7723d] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/65">
            Have something in mind?
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-[-0.04em] sm:text-6xl">
            Let&apos;s make something worth remembering.
          </h2>
          <a
            href="mailto:hello@zeusaggabao.com"
            className="mt-8 inline-flex rounded-full bg-[#12382c] px-7 py-4 text-sm font-semibold transition-transform hover:-translate-y-1"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
