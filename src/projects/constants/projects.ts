export interface Project{
  card: string;
  rank: number;
  title: string;
  numberCard: string;
  url?: string;
}

export const projects: Project[] = [
  {
    card: "Emperatriz",
    numberCard: "iii",
    rank: 5,
    title: "naranja store web"
  },
  {
    card: "Emperador",
    numberCard: "iv",
    rank: 4,
    title: "insumos mineros web"
  }
]
