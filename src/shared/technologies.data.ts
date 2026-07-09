import AstroJs from "./assets/technologies/astro-js.png";
import Css3 from "./assets/technologies/css3.png";
import Django from "./assets/technologies/django.png";
import Docker from "./assets/technologies/docker.png";
import Git from "./assets/technologies/git.png";
import Html from "./assets/technologies/html.png";
import Java from "./assets/technologies/java.png";
import Js from "./assets/technologies/js.png";
import Linux from "./assets/technologies/linux.png";
import Mysql from "./assets/technologies/mysql.png";
import Postgresql from "./assets/technologies/postgresql.png";
import Python from "./assets/technologies/python.png";
import Sql from "./assets/technologies/sql.png";
import Tailwind from "./assets/technologies/tailwind.png";
import Ts from "./assets/technologies/ts.png";
import Vuejs from "./assets/technologies/vuejs.png";

export interface Tech {
  name: string;
  image: string;
  category: string;
}

export const technologies: Tech[] = [
  { name: "Astro JS", category: "frontend", image: AstroJs.src },
  { name: "Django", category: "backend", image: Django.src },
  { name: "MySQL", category: "db", image: Mysql.src },
  { name: "CSS3", category: "frontend", image: Css3.src },
  { name: "Git", category: "tools", image: Git.src },
  { name: "HTML", category: "frontend", image: Html.src },
  { name: "Docker", category: "backend", image: Docker.src },
  { name: "PostgreSQL", category: "db", image: Postgresql.src },
  { name: "JavaScript", category: "frontend", image: Js.src },
  { name: "Linux", category: "tools", image: Linux.src },
  { name: "TypeScript", category: "frontend", image: Ts.src },
  { name: "Java", category: "backend", image: Java.src },
  { name: "SQL", category: "db", image: Sql.src },
  { name: "Tailwind", category: "frontend", image: Tailwind.src },
  { name: "Python", category: "backend", image: Python.src },
  { name: "Vue.js", category: "frontend", image: Vuejs.src },
];
