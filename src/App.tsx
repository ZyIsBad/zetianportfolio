import { useState } from 'react'
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f1e9] text-[#12382c]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#12382c]/10 bg-[#f4f1e9]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="font-display text-2xl font-semibold tracking-[-0.04em]"
            aria-label="Zeus Christian Aggabao — home"
          >
            ZCA<span className="text-[#c7723d]">.</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-[#12382c]/70 transition-colors hover:text-[#12382c]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:hello@zeusaggabao.com"
            className="hidden rounded-full bg-[#12382c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c7723d] md:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-full border border-[#12382c]/15 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-[#12382c] transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-[#12382c] transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-[#12382c]/10 bg-[#f4f1e9] px-5 py-5 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#12382c]/10 py-4 text-lg font-semibold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:hello@zeusaggabao.com"
                className="mt-5 rounded-full bg-[#12382c] px-5 py-3.5 text-center text-sm font-semibold text-white"
              >
                Let&apos;s talk
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <HomePage />
        <AboutPage />
        <ProjectPage />
      </main>

      <footer className="bg-[#0d2d24] px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl">Zeus Christian Aggabao</p>
          <p className="text-sm text-white/55">Designed and built with intention.</p>
          <a
            href="#home"
            className="text-sm font-semibold text-[#e7b892] transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}