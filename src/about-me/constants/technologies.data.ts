import AstroJs from "../assets/technologies/astro-js.png";
import Css3 from "../assets/technologies/css3.png";
import Django from "../assets/technologies/django.png";
import Docker from "../assets/technologies/docker.png";
import Git from "../assets/technologies/git.png";
import Html from "../assets/technologies/html.png";
import Java from "../assets/technologies/java.png";
import Js from "../assets/technologies/js.png";
import Linux from "../assets/technologies/linux.png";
import Mysql from "../assets/technologies/mysql.png";
import Postgresql from "../assets/technologies/postgresql.png";
import Python from "../assets/technologies/python.png";
import Sql from "../assets/technologies/sql.png";
import Tailwind from "../assets/technologies/tailwind.png";
import Ts from "../assets/technologies/ts.png";
import Vuejs from "../assets/technologies/vuejs.png";
import type { ImageMetadata } from "astro";

export interface Tech {
  name: string;
  image: ImageMetadata;
  category: string;
}

export const technologies: Tech[] = [
  { name: "Astro JS", category: "frontend", image: AstroJs },
  { name: "Django", category: "backend", image: Django },
  { name: "MySQL", category: "db", image: Mysql },
  { name: "CSS3", category: "frontend", image: Css3 },
  { name: "Git", category: "tools", image: Git },
  { name: "HTML", category: "frontend", image: Html },
  { name: "Docker", category: "backend", image: Docker },
  { name: "PostgreSQL", category: "db", image: Postgresql },
  { name: "JavaScript", category: "frontend", image: Js },
  { name: "Linux", category: "tools", image: Linux },
  { name: "TypeScript", category: "frontend", image: Ts },
  { name: "Java", category: "backend", image: Java },
  { name: "SQL", category: "db", image: Sql },
  { name: "Tailwind", category: "frontend", image: Tailwind },
  { name: "Python", category: "backend", image: Python },
  { name: "Vue.js", category: "frontend", image: Vuejs },
];
