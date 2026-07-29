import type { IconType } from "react-icons"
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiGit,
  SiJest,
} from "react-icons/si"

export type Skill = {
  name: string
  Icon: IconType
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "JavaScript", Icon: SiJavascript },
    ],
  },
  {
    title: "Frameworks / Libraries",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Next.js", Icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend / DB",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "Jest", Icon: SiJest },
    ],
  },
]

export type Project = {
  title: string
  logo: string
  description: string
  status: "Completo" | "Em Construção"
  tags: string[]
  demoLabel: string
  demoUrl: string
  codeUrl: string
}

export const projects: Project[] = [
  {
    title: "Wiki Books",
    logo: "/projects/wikibooks.png",
    description:
      "Plataforma de busca e catalogação de livros utilizando API externa. Sistema de favoritos e listagem dinâmica com filtros avançados.",
    status: "Completo",
    tags: ["React", "TypeScript", "API"],
    demoLabel: "Demo",
    demoUrl: "https://projeto-wiki-books-kld7.vercel.app/",
    codeUrl: "https://github.com/Phcode007/projeto-wiki-books",
  },
  {
    title: "Garoinha",
    logo: "/projects/garoinha.png",
    description:
      "App de previsão do tempo em tempo real. Interface intuitiva que exibe temperatura, condições climáticas e previsões detalhadas via API meteorológica.",
    status: "Completo",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLabel: "Demo",
    demoUrl: "https://garoinha.vercel.app/",
    codeUrl: "https://github.com/Phcode007/garoinha",
  },
  {
    title: "FitLink",
    logo: "/projects/fitlink.png",
    description:
      "Aplicação de gestão fitness com tracking de treinos, evolução de cargas e dashboard analítico. Sistema completo de autenticação.",
    status: "Em Construção",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoLabel: "Preview",
    demoUrl: "https://fit-link-eta.vercel.app/",
    codeUrl: "https://github.com/Phcode007/fitlink",
  },
]

export type ExperienceItem = {
  date: string
  role: string
  company: string
}

export const experiences: ExperienceItem[] = [
  {
    date: "2026 — Presente",
    role: "Freelance Developer",
    company:
      "Desenvolvimento de soluções personalizadas para clientes diversos, com foco em interfaces de alta performance, experiência do usuário e otimização SEO.",
  },
  {
    date: "2025 — 2026",
    role: "Full Stack Bootcamp Generation Brasil",
    company:
      "Atuação em times ágeis construindo features, atuando com revisão de código, integração e deploys, além de automatização de testes.",
  },
]

export const stats = [
  { number: "1", label: "Ano de Experiência" },
  { number: "3", label: "Projetos Concluídos" },
  { number: "12+", label: "Tecnologias" },
  { number: "100%", label: "Compromisso" },
]

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Phcode007" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/paulo-henrique-belarmino-ads" },
  { name: "Instagram", url: "https://www.instagram.com/paulo.herq/" },
]
