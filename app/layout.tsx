import type { Metadata, Viewport } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Paulo Henrique Belarmino | Desenvolvedor Full Stack",
  description:
    "Portfólio de Paulo Henrique Belarmino Santos - Desenvolvedor Full Stack com foco em Front-end.",
  authors: [{ name: "Paulo Henrique Belarmino Santos" }],
  keywords: ["Desenvolvedor Full Stack", "Front-end", "React", "Next.js", "Node.js", "Portfólio"],
  openGraph: {
    title: "Paulo Henrique Belarmino | Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack com foco em Front-end.",
    type: "website",
    locale: "pt_BR",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${firaCode.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
