import { Reveal } from "@/components/reveal"
import { SectionTitle } from "@/components/section-title"
import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle>Experiência Profissional</SectionTitle>

      <div className="relative mt-12">
        {/* Timeline vertical line: left on mobile, centered on desktop */}
        <span
          aria-hidden
          className="absolute bottom-0 left-2 top-2 w-0.5 bg-gradient-to-b from-primary/40 to-primary/5 md:left-1/2 md:-translate-x-1/2"
        />

        <ul className="flex flex-col gap-10">
          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0
            return (
              <Reveal as="li" key={item.role} delay={index * 120} className="relative">
                <div className="relative flex md:grid md:grid-cols-2 md:gap-8">
                  {/* Dot */}
                  <span
                    aria-hidden
                    className="absolute left-2 top-2 z-10 size-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_16px_rgba(65,166,126,0.5)] md:left-1/2"
                  />

                  <div
                    className={`ml-8 w-full md:ml-0 ${
                      isLeft ? "md:col-start-1 md:pr-8" : "md:col-start-2 md:pl-8"
                    }`}
                  >
                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 shadow-lg shadow-black/40">
                      <span className="font-mono text-sm font-bold text-primary">{item.date}</span>
                      <h3 className="mt-2 font-display text-lg font-bold text-foreground">{item.role}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
