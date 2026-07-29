"use client"

import { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#stacks" },
  { label: "Projetos", href: "#projects" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-2xl border border-white/5 bg-card/70 px-5 py-3 backdrop-blur-md transition-shadow duration-300 data-[scrolled=true]:shadow-2xl data-[scrolled=true]:shadow-black/40 md:w-[calc(100%-4rem)]"
      data-scrolled={scrolled}
    >
      <a href="#hero" className="font-display text-xl font-bold text-primary transition-transform hover:scale-105">
        PH<span className="text-foreground">.</span>dev
      </a>

      <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group relative text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            {item.label}
            <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-9 items-center justify-center rounded-lg text-foreground md:hidden"
      >
        {open ? <HiX size={22} /> : <HiMenu size={22} />}
      </button>

      {open && (
        <nav
          aria-label="Navegação principal"
          className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-white/5 bg-card p-3 backdrop-blur-md md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
