import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { SectionTitle } from "@/components/section-title"
import { projects } from "@/lib/data"
import { HiArrowUpRight } from "react-icons/hi2"
import { FiCode } from "react-icons/fi"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle>Projetos</SectionTitle>

      <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        {projects.map((project, index) => (
          <Reveal key={project.title} className="h-full" delay={index * 100} as="article">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-card transition-all hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-black/50">
              <div className="flex items-center justify-center border-b border-white/5 bg-white/[0.02] py-8">
                <div className="relative size-[120px] shrink-0">
                  <Image
                    src={project.logo || "/placeholder.svg"}
                    alt={`Logo do projeto ${project.title}`}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Completo"
                        ? "bg-primary/15 text-primary"
                        : "bg-amber-400/15 text-amber-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-primary-dark"
                  >
                    {project.demoLabel}
                    <HiArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <FiCode size={14} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
