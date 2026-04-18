import type { ContentSummaryType } from "src/components/table/Table.types";
import dumbImage from "../../assets/dumb-image.jpg";

export type ItemSet = {
  theadItems: string[];
  tbodyItems: ContentSummaryType[];
};

export const allContents: ItemSet = {
  theadItems: [
    "Miniatura",
    "Titulo",
    "Tipo",
    "Estado",
    "Fecha de subida",
    "Acciones",
  ],
  tbodyItems: [
    {
      img: { src: dumbImage, alt: "Avatar" },
      title: "Avatar",
      type: { key: "movie" },
      state: { key: "published" },
      uploadAt: "2024-05-01",
    },
    {
      img: { src: dumbImage, alt: "Titanic" },
      title: "Titanic",
      type: { key: "movie" },
      state: { key: "featured" },
      uploadAt: "2024-05-02",
    },
    {
      img: { src: dumbImage, alt: "Game of Thrones" },
      title: "Game of Thrones",
      type: { key: "serie" },
      state: { key: "saved" },
      uploadAt: "2024-06-10",
    },
    {
      img: { src: dumbImage, alt: "The Witcher" },
      title: "The Witcher",
      type: { key: "serie" },
      state: { key: "published" },
      uploadAt: "2024-06-11",
    },
    {
      img: { src: dumbImage, alt: "House of Cards" },
      title: "House of Cards",
      type: { key: "serie" },
      state: { key: "featured" },
      uploadAt: "2024-06-12",
    },
    {
      img: { src: dumbImage, alt: "Mi diario 2024" },
      title: "Mi diario 2024",
      type: { key: "diarie" },
      state: { key: "saved" },
      uploadAt: "2024-07-01",
    },
    {
      img: { src: dumbImage, alt: "Diario de viaje" },
      title: "Diario de viaje",
      type: { key: "diarie" },
      state: { key: "published" },
      uploadAt: "2024-07-05",
    },
    {
      img: { src: dumbImage, alt: "The Matrix" },
      title: "The Matrix",
      type: { key: "movie" },
      state: { key: "featured" },
      uploadAt: "2024-08-15",
    },
    {
      img: { src: dumbImage, alt: "Dark" },
      title: "Dark",
      type: { key: "serie" },
      state: { key: "published" },
      uploadAt: "2024-08-16",
    },
    {
      img: { src: dumbImage, alt: "Mi cuaderno" },
      title: "Mi cuaderno",
      type: { key: "diarie" },
      state: { key: "saved" },
      uploadAt: "2024-08-17",
    },
    {
      img: { src: dumbImage, alt: "Gladiator" },
      title: "Gladiator",
      type: { key: "movie" },
      state: { key: "published" },
      uploadAt: "2024-08-18",
    },
  ],
};

export const movies: ItemSet = {
  theadItems: [
    "Miniatura",
    "Titulo",
    "Tipo",
    "Estado",
    "Fecha de subida",
    "Acciones",
  ],
  tbodyItems: [
    {
      img: { src: dumbImage, alt: "Avatar" },
      title: "Avatar",
      type: { key: "movie" },
      state: { key: "published" },
      uploadAt: "2024-05-01",
    },
    {
      img: { src: dumbImage, alt: "Titanic" },
      title: "Titanic",
      type: { key: "movie" },
      state: { key: "featured" },
      uploadAt: "2024-05-02",
    },
    {
      img: { src: dumbImage, alt: "The Matrix" },
      title: "The Matrix",
      type: { key: "movie" },
      state: { key: "featured" },
      uploadAt: "2024-08-15",
    },
    {
      img: { src: dumbImage, alt: "Gladiator" },
      title: "Gladiator",
      type: { key: "movie" },
      state: { key: "published" },
      uploadAt: "2024-08-18",
    },
  ],
};

export const series: ItemSet = {
  theadItems: [
    "Miniatura",
    "Titulo",
    "Tipo",
    "Estado",
    "Fecha de subida",
    "Acciones",
  ],
  tbodyItems: [
    {
      img: { src: dumbImage, alt: "Game of Thrones" },
      title: "Game of Thrones",
      type: { key: "serie" },
      state: { key: "saved" },
      uploadAt: "2024-06-10",
    },
    {
      img: { src: dumbImage, alt: "The Witcher" },
      title: "The Witcher",
      type: { key: "serie" },
      state: { key: "published" },
      uploadAt: "2024-06-11",
    },
    {
      img: { src: dumbImage, alt: "House of Cards" },
      title: "House of Cards",
      type: { key: "serie" },
      state: { key: "featured" },
      uploadAt: "2024-06-12",
    },
    {
      img: { src: dumbImage, alt: "Dark" },
      title: "Dark",
      type: { key: "serie" },
      state: { key: "published" },
      uploadAt: "2024-08-16",
    },
  ],
};

export const diaries: ItemSet = {
  theadItems: [
    "Miniatura",
    "Titulo",
    "Tipo",
    "Estado",
    "Fecha de subida",
    "Acciones",
  ],
  tbodyItems: [
    {
      img: { src: dumbImage, alt: "Mi diario 2024" },
      title: "Mi diario 2024",
      type: { key: "diarie" },
      state: { key: "saved" },
      uploadAt: "2024-07-01",
    },
    {
      img: { src: dumbImage, alt: "Diario de viaje" },
      title: "Diario de viaje",
      type: { key: "diarie" },
      state: { key: "published" },
      uploadAt: "2024-07-05",
    },
    {
      img: { src: dumbImage, alt: "Mi cuaderno" },
      title: "Mi cuaderno",
      type: { key: "diarie" },
      state: { key: "saved" },
      uploadAt: "2024-08-17",
    },
  ],
};
