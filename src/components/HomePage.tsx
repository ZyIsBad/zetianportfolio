export default function HomePage() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20"
    >
      <div
        className="pointer-events-none absolute -right-32 top-28 size-[32rem] rounded-full border border-[#12382c]/10 sm:size-[40rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-12 top-48 size-[20rem] rounded-full border border-[#12382c]/10 sm:size-[27rem]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="size-2 rounded-full bg-[#c7723d]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#12382c]/65">
              Available for select projects
            </p>
          </div>

          <h1 className="max-w-5xl font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.82] font-medium tracking-[-0.065em]">
            Zeus
            <span className="block pl-[8vw] italic text-[#2e624f] sm:pl-24">
              Christian
            </span>
            <span className="block">
              Aggabao<span className="text-[#c7723d]">.</span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#12382c] py-2.5 pr-3 pl-6 text-sm font-semibold text-white transition-colors hover:bg-[#c7723d]"
            >
              Explore my work
              <span className="grid size-10 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
            <p className="max-w-xs text-sm leading-6 text-[#12382c]/60">
              Frontend developer crafting thoughtful digital experiences where
              clean code meets purposeful design.
            </p>
          </div>
        </div>

        <div className="hidden justify-self-end lg:block">
          <p className="mb-5 text-right text-xs font-bold uppercase tracking-[0.2em] text-[#12382c]/45">
            Based in the Philippines
          </p>
          <div className="relative grid aspect-[4/5] w-72 place-items-center overflow-hidden rounded-[10rem_10rem_1.5rem_1.5rem] bg-[#164535]">
            <div className="absolute inset-5 rounded-[9rem_9rem_1rem_1rem] border border-white/15" />
            <span className="font-display text-8xl font-medium tracking-[-0.08em] text-[#f4f1e9]">
              ZA
            </span>
            <span className="absolute bottom-8 h-px w-20 bg-[#e7b892]" />
          </div>
        </div>
      </div>
    </section>
  )
}
