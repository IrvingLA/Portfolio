import type { ImageMetadata } from "astro";

import Akihiko from "../assets/avatars/akihiko.png";
import Mitsuri from "../assets/avatars/mitsuri.png";
import Rapier from "../assets/weapons/rapier.png";
import Fist from "../assets/weapons/fist.png";

export interface Achievement {
  effect: string
  date: string;
  description: string;
}

interface Weapon {
  name: string;
  atk: number;
  acc: number;
  image: ImageMetadata;
  achievement: Achievement;
}

export interface Education {
  name: string;
  avatar: ImageMetadata;
  color: string;
  alt: string;
  weapons: Weapon[];
}

export const Educations: Education[] = [
  {
    name: "Educación",
    avatar: Akihiko,
    alt: "Imagen para educacion",
    color: "bg-gray-500/90",
    weapons: [
      {
        name: "Ing. en Sistemas",
        atk: 410,
        acc: 98,
        image: Fist,
        achievement: {
          date: "2026",
          effect: "Maestría base",
          description:
            "Instituto Tecnologico Superior de Fresnillo (ITSF) +10 ATK y +5 ACC",
        },
      },
    ],
  },
  {
    name: "Certificaciones",
    avatar: Mitsuri,
    color: "bg-red-500/90",
    alt: "Imagen para las Certificaciones",
    weapons: [
      {
        name: "Intermediate Docker",
        atk: 425,
        acc: 98,
        image: Rapier,
        achievement: {
          date: "Junio 2026",
          effect: "Entornos portables",
          description: "DataCamp recupera 5 EN al inicio de cada turno",
        },
      },
      {
        name: "Intermediate Python",
        atk: 377,
        acc: 100,
        image: Rapier,
        achievement: {
          date: "Junio 2026",
          effect: "Automatización",
          description: "DataCamp 20% de probabilidad de atacar dos veces",
        },
      },
      {
        name: "Prompting Responsable",
        atk: 310,
        acc: 95,
        image: Rapier,
        achievement: {
          date: "Octubre 2025",
          effect: "Optimiza comandos",
          description: "Santander Open Academy +15% de daño en técnicas",
        },
      },
    ],
  },
];
