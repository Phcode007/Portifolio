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
                {category.skills.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-black/40"
                  >
                    <Icon
                      size={32}
                      className="text-primary transition-transform group-hover:scale-110"
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
