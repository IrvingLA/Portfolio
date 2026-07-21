import type { ImageMetadata } from "astro";

import Akihiko from "../assets/avatars/akihiko.png"
import Mitsuri from "../assets/avatars/mitsuri.png"
import Rapier from "../assets/weapons/rapier.png"
import Fist from "../assets/weapons/fist.png"

interface Achievement {
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
    name: "Educacion",
    avatar: Akihiko,
    alt: "Imagen para educacion",
    color: "bg-gray-500/90",
    weapons: [{

      name: "Ing. en Sistemas Computacionales",
      atk: 410,
      acc: 98,
      image: Fist,
      achievement:
      {
        date: "2026",
        description: "Finalice mi carrera en el Instituto Tecnologico Superior de Fresnillo (ITSF)"
      }
    }],
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
          description: "DataCamp"
        }
      },
      {
        name: "Intermediate Python",
        atk: 377,
        acc: 100,
        image: Rapier,
        achievement: {
          date: "Junio 2026",
          description: "DataCamp"
        }
      },
      {
        name: "Prompting Responsable",
        atk: 310,
        acc: 95,
        image: Rapier,
        achievement: {
          date: "Octubre 2025",
          description: "Santander Open Academy"
        }
      },
    ]
  }
]
