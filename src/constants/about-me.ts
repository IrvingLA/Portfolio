import prota from "../assets/avatars/prota.png";
import yukari from "../assets/avatars/yukari.png";
import junpei from "../assets/avatars/junpei.png";

export interface Skills {
  title: string;
  urlImage: string;
  altImage: string;
  lv: number;
  hp: number;
  sp: number;
  color: string;
}

export const section: Skills[] = [
  {
    title: "Sobre mi",
    urlImage: prota.src,
    altImage: "Retrato de Sobre mí",
    lv: 55,
    hp: 550,
    sp: 350,
    color: "bg-primary-300/60",
  },
  {
    title: "technical skills",
    urlImage: yukari.src,
    altImage: "Retrato de Technical Skills",
    lv: 42,
    hp: 400,
    sp: 280,
    color: "bg-pink-500/50",
  },
  {
    title: "soft skills",
    urlImage: junpei.src,
    altImage: "Retrato de Soft Skills",
    lv: 48,
    hp: 450,
    sp: 320,
    color: "bg-blue-500/50",
  },
];
