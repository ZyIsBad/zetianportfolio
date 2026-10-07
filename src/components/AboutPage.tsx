const strengths = [
  ["01", "Interface Development"],
  ["02", "Responsive Design"],
  ["03", "Creative Direction"],
];

export default function AboutPage() {
  return (
    <section id="about" className="bg-[#12382c] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#e7b892]">
              About me
            </p>
            <h2 className="font-display text-5xl leading-[0.95] font-medium tracking-[-0.04em] sm:text-7xl">
              Building with
              <span className="block italic text-[#9dc5b3]">clarity &amp; care.</span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-2xl text-xl leading-8 font-light text-white/80 sm:text-2xl sm:leading-10">
              I&apos;m Zeus, a developer focused on turning complex ideas into simple,
              intuitive digital products that feel as good as they perform.
            </p>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/55">
              My approach blends technical precision with a strong eye for visual detail. I
              care about the small moments—smooth interactions, meaningful typography, and
              experiences that work beautifully on every screen.
            </p>

            <div className="mt-14 border-t border-white/15">
              {strengths.map(([number, label]) => (
                <div
                  key={number}
                  className="group flex items-center gap-5 border-b border-white/15 py-5"
                >
                  <span className="text-xs text-[#e7b892]">{number}</span>
                  <span className="text-base font-medium sm:text-lg">{label}</span>
                  <span className="ml-auto text-xl text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-[#e7b892]">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 border-t border-white/15 pt-10 sm:grid-cols-4">
          {[
            ["3+", "Years creating"],
            ["20+", "Projects shipped"],
            ["100%", "Curiosity"],
            ["∞", "Ideas to explore"],
          ].map(([value, label]) => (
            <div key={label} className="py-4">
              <p className="font-display text-4xl text-[#e7b892] sm:text-5xl">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/45">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
