import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { socialLinks } from "@/lib/data"

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
} as const

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-white/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:px-8">
        <div className="flex gap-4">
          {socialLinks.map(({ name, url }) => {
            const Icon = iconMap[name as keyof typeof iconMap]
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex size-11 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted">
          © {year} Paulo Henrique Belarmino. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
