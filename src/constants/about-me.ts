import prota from "../assets/avatars/prota.png";

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
    altImage: "Imagen del protagonista",
    lv: 40,
    hp: 390,
    sp: 250,
    color: "primary",
  },
];
