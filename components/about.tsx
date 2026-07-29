import { Reveal } from "@/components/reveal"
import { SectionTitle } from "@/components/section-title"
import { stats } from "@/lib/data"

const specialties = ["Design de Interface", "Arquitetura Front-end", "Performance & SEO"]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle>Sobre Mim</SectionTitle>

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-2xl border-l-4 border-primary bg-card p-8">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Olá! Meu nome é <strong className="text-foreground">Paulo Henrique Belarmino Santos</strong>,
                desenvolvedor Full Stack com foco em entregar produtos digitais de qualidade, performance e
                experiência refinada.
              </p>
              <p>
                Atuo com Front-end moderno, Node.js e arquiteturas escaláveis. Minha abordagem prioriza código
                limpo, acessibilidade e interfaces com alta conversão.
              </p>
              <p>Além do código, sou entusiasta de leitura, finanças e aprendizado contínuo.</p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {specialties.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/5 bg-white/5 px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="h-full" delay={150}>
          <ul
            aria-label="Estatísticas profissionais"
            className="grid h-full grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-center transition-colors hover:border-primary/30"
              >
                <span className="font-display text-4xl font-extrabold text-primary md:text-5xl">
                  {stat.number}
                </span>
                <span className="mt-2 text-sm text-muted">{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
