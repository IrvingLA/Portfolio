import prota from "../assets/avatars/prota.png";
import yukari from "../assets/avatars/yukari.png";
import junpei from "../assets/avatars/junpei.png";

import character1 from "../assets/character/prota-shadow.png";
import character2 from "../assets/character/yukari-shadow.png";
import character3 from "../assets/character/junpei-shadow.png";

import AboutMeText from "../components/about-me-text.astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Skills {
  title: string;
  urlImage: string;
  urlCharacter: string;
  altImage: string;
  lv: number;
  hp: number;
  sp: number;
  color: string;
  dialog?: AstroComponentFactory;
}

export const section: Skills[] = [
  {
    title: "Sobre mi",
    urlImage: prota.src,
    urlCharacter: character1.src,
    altImage: "Retrato de Sobre mí",
    lv: 55,
    hp: 550,
    sp: 350,
    color: "bg-primary-300/60",
    dialog: AboutMeText,
  },
  {
    title: "technical skills",
    urlImage: yukari.src,
    urlCharacter: character2.src,
    altImage: "Retrato de Technical Skills",
    lv: 42,
    hp: 400,
    sp: 280,
    color: "bg-pink-500/50",
  },
  {
    title: "soft skills",
    urlImage: junpei.src,
    urlCharacter: character3.src,
    altImage: "Retrato de Soft Skills",
    lv: 48,
    hp: 450,
    sp: 320,
    color: "bg-blue-500/50",
  },
];
