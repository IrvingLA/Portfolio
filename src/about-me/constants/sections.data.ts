import protaAvatar from "../assets/avatars/prota.png";
import yukariAvatar from "../assets/avatars/yukari.png";
import junpeiAvatar from "../assets/avatars/junpei.png";

import protaShadow from "../assets/character/prota-shadow.webp";
import yukariShadow from "../assets/character/yukari-shadow.webp";
import junpeiShadow from "../assets/character/junpei-shadow.webp";

import AboutMeText from "../components/AboutMeText.astro";
import SoftSkills from "../components/SoftSkills.astro";
import TechnicalSkills from "../components/TechnicalSkills.astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { ImageMetadata } from "astro";

export interface Skills {
  title: string;
  urlImage: ImageMetadata;
  urlCharacter: ImageMetadata;
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
    urlImage: protaAvatar,
    urlCharacter: protaShadow,
    altImage: "Retrato de Sobre mí",
    lv: 55,
    hp: 550,
    sp: 350,
    color: "bg-primary-300/60",
    dialog: AboutMeText,
  },
  {
    title: "technical skills",
    urlImage: yukariAvatar,
    urlCharacter: yukariShadow,
    altImage: "Retrato de Technical Skills",
    lv: 42,
    hp: 400,
    sp: 280,
    color: "bg-pink-500/50",
    dialog: TechnicalSkills,
  },
  {
    title: "soft skills",
    urlImage: junpeiAvatar,
    urlCharacter: junpeiShadow,
    altImage: "Retrato de Soft Skills",
    lv: 48,
    hp: 450,
    sp: 320,
    color: "bg-blue-500/50",
    dialog: SoftSkills,
  },
];
