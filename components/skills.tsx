import type React from "react"
import { Reveal } from "@/components/reveal"
import { SectionTitle } from "@/components/section-title"
import { skillCategories } from "@/lib/data"

export function Skills() {
  return (
    <section id="stacks" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle>Skills</SectionTitle>

      <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} className="h-full" delay={index * 100}>
            <div className="flex h-full min-h-56 flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-6">
              <h3 className="mb-5 font-display text-lg font-bold text-primary">{category.title}</h3>

              <div className="grid grid-cols-3 gap-3">
                {category.skills.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    style={{ "--brand": color } as React.CSSProperties}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:[border-color:var(--brand)] hover:[box-shadow:0_0_24px_-4px_var(--brand)]"
                  >
                    <Icon
                      size={32}
                      className="text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:[color:var(--brand)]"
                      aria-hidden
                    />
                    <span className="text-center text-sm font-semibold text-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
