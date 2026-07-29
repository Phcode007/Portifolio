import Image from "next/image"
import { HiArrowUpRight } from "react-icons/hi2"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-32 md:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,166,126,0.12),transparent_55%)]"
      />

      <div className="relative grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-12">
        <div className="animate-reveal">
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Paulo Henrique
            <br />
            <span className="text-primary">Belarmino Santos</span>
          </h1>

          <p className="mt-5 max-w-md text-lg text-muted text-pretty">
            Desenvolvedor Full Stack com foco em Front-end
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-foreground">
            <span className="size-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(65,166,126,0.7)]" />
            Disponível para Freelance
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-background shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Ver Projetos
              <HiArrowUpRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border-2 border-primary px-7 py-3.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="flex animate-reveal justify-center [animation-delay:150ms] md:justify-end">
          <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-3xl border border-primary/40 shadow-2xl shadow-black/60 transition-transform duration-500 hover:-translate-y-2.5 sm:w-72">
            <Image
              src="/profile.jpg"
              alt="Foto de Paulo Henrique Belarmino Santos"
              fill
              priority
              sizes="(max-width: 640px) 16rem, 18rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
