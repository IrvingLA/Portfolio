import protaAvatar from "./assets/avatars/prota.png";
import yukariAvatar from "./assets/avatars/yukari.png";
import junpeiAvatar from "./assets/avatars/junpei.png";

import protaShadow from "./assets/character/prota-shadow.webp";
import yukariShadow from "./assets/character/yukari-shadow.webp";
import junpeiShadow from "./assets/character/junpei-shadow.webp";

import AboutMeText from "./AboutMeText.astro";
import SoftSkills from "./SoftSkills.astro";
import TechnicalSkills from "./TechnicalSkills.astro";
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
    urlImage: protaAvatar.src,
    urlCharacter: protaShadow.src,
    altImage: "Retrato de Sobre mí",
    lv: 55,
    hp: 550,
    sp: 350,
    color: "bg-primary-300/60",
    dialog: AboutMeText,
  },
  {
    title: "technical skills",
    urlImage: yukariAvatar.src,
    urlCharacter: yukariShadow.src,
    altImage: "Retrato de Technical Skills",
    lv: 42,
    hp: 400,
    sp: 280,
    color: "bg-pink-500/50",
    dialog: TechnicalSkills,
  },
  {
    title: "soft skills",
    urlImage: junpeiAvatar.src,
    urlCharacter: junpeiShadow.src,
    altImage: "Retrato de Soft Skills",
    lv: 48,
    hp: 450,
    sp: 320,
    color: "bg-blue-500/50",
    dialog: SoftSkills,
  },
];
