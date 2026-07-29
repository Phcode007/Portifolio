import { Reveal } from "@/components/reveal"

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="relative inline-block font-display text-3xl font-bold text-primary md:text-4xl">
        {children}
        <span className="absolute -bottom-2.5 left-0 h-1 w-3/5 rounded-full bg-primary" />
      </h2>
    </Reveal>
  )
}
