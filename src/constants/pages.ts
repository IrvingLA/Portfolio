export interface Page {
  label: string;
  href: string;
  extraClasses: string;
  textColor: string;
}

export const pages: Page[] = [
  {
    label: "Sobre mi",
    href: "/about-me",
    extraClasses: "hover:-rotate-12",
    textColor: "text-primary-400",
  },
  {
    label: "Proyectos",
    href: "/projects",
    extraClasses: "-rotate-10",
    textColor: "text-primary-500",
  },
  {
    label: "Experiencia",
    href: "/experience",
    extraClasses: "-rotate-3 -translate-y-1",
    textColor: "text-primary-400",
  },
  {
    label: "Educación",
    href: "/education",
    extraClasses: "rotate-5 -translate-y-1 hover:-rotate-3",
    textColor: "text-primary-400",
  },
  {
    label: "Contacto",
    href: "/contact",
    extraClasses: "-rotate-5 -translate-y-2 hover:rotate-6",
    textColor: "text-primary-500",
  },
];
