import type { ImageMetadata } from "astro";

import Ken from "../assets/avatars/ken.png";
import Koromaru from "../assets/avatars/koromaru.png";
import Aegis from "../assets/avatars/aegis.png";

export interface Social {
  name: string;
  url: string;
  image: ImageMetadata;
  alt: string;
  color: string;
  lv: number;
  hp: number;
  sp: number;
}

export const Socials: Social[] = [
  {
    name: "gmail",
    url: "irvingladev@gmail.com",
    alt: "imagen para gmail",
    color: "bg-orange-500/90",
    image: Ken,
    lv: 35,
    hp: 220,
    sp: 330,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/irving-ibarra-la/",
    alt: "imagen para linkedin",
    color: "bg-gray-500/90",
    image: Koromaru,
    lv: 45,
    hp: 380,
    sp: 250,
  },
  {
    name: "github",
    url: "https://github.com/IrvingLA",
    alt: "imagen para github",
    color: "bg-yellow-500/90",
    image: Aegis,
    lv: 52,
    hp: 480,
    sp: 290,
  },
];
