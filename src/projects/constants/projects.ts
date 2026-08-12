import type { ImageMetadata } from "astro";

import type { Tech } from "../../about-me/constants/technologies.data";
import { technologies } from "../../about-me/constants/technologies.data";

import Emperor from "../assets/cards/emperor.webp"
import Empress from "../assets/cards/empress.webp"

import Naranja from "../assets/screenshoots/naranja.webp"
import Mineros from "../assets/screenshoots/mineros.webp"

export interface Project{
  card: string;
  rank: number;
  title: string;
  numberCard: string;
  imgCard: ImageMetadata;
  techs: Tech[];
  description: string;
  imgWeb: ImageMetadata;
  url: string;
}

export const projects: Project[] = [
  {
    card: "Emperatriz",
    numberCard: "iii",
    rank: 8,
    title: "naranja store web",
    imgCard: Empress,
    techs: technologies.filter(({ name }) =>
      ["HTML", "CSS3", "TypeScript", "Tailwind",
        "Astro JS", "Vue.js", "Docker", "Git"].includes(name)
    ),
    description: "Web de una ferreteria",
    imgWeb: Naranja,
    url: "https://naranjastore.net/"
  },
  {
    card: "Emperador",
    numberCard: "iv",
    rank: 6,
    title: "insumos mineros web",
    imgCard: Emperor,
    techs: technologies.filter(({ name }) =>
        ["HTML", "CSS3", "TypeScript", "Tailwind",
          "Astro JS", "Vue.js", "Docker", "Git"].includes(name)
      ),
    description: "Web de un taller",
    imgWeb: Mineros,
    url: "https://insumosmineros.net/"
  }
]
