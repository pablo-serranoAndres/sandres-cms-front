import { api, ENDPOINTS } from "@api";
import type {
  ContentState,
  ContentSummaryType,
  ContentType,
  ItemSetType,
  TabType,
} from "@types";
import type { Content } from "src/models/Content";

const getAllContents = async (): Promise<ItemSetType> => {
  const tbodyItems: ContentSummaryType[] = [];
  const result = await api<Content[]>(ENDPOINTS.CONTENTS);

  if (result) {
    for (let i = 0; i < result.length; i++) {
      tbodyItems.push({
        img: { src: result[i].cartelImage, alt: result[i].title },
        title: result[i].title,
        type: result[i].type as ContentType,
        state: result[i].state as ContentState,
        uploadAt: "result.lastUpdated",
      });
    }
  }

  const allContents = {
    theadItems: [
      "Portada",
      "Título",
      "Tipo",
      "Estado",
      "Fecha de creación",
      "Acciones",
    ],
    tbodyItems: tbodyItems,
  };

  return allContents;
};

const getAllMovies = async (): Promise<ItemSetType> => {
  const tbodyItems: ContentSummaryType[] = [];
  const result = await api<Content[]>(ENDPOINTS.CONTENTS);

  if (result) {
    result.map((content: Content) => {
      tbodyItems.push({
        img: { src: content.cartelImage, alt: content.title },
        title: content.title,
        type: content.type as ContentType,
        state: content.state as ContentState,
        uploadAt: "result.lastUpdated",
      });
    });
  }

  const allContents = {
    theadItems: ["Portada", "Título", "Tipo", "Estado", "Fecha de creación"],
    tbodyItems: tbodyItems,
  };

  return allContents;
};

const getAllSeries = async (): Promise<ItemSetType> => {
  const tbodyItems: ContentSummaryType[] = [];
  const result = await api<Content[]>(ENDPOINTS.CONTENTS);

  if (result) {
    result.map((content: Content) => {
      tbodyItems.push({
        img: { src: content.cartelImage, alt: content.title },
        title: content.title,
        type: content.type as ContentType,
        state: content.state as ContentState,
        uploadAt: "result.lastUpdated",
      });
    });
  }

  const allContents = {
    theadItems: ["Portada", "Título", "Tipo", "Estado", "Fecha de creación"],
    tbodyItems: tbodyItems,
  };

  return allContents;
};

const getAllDiaries = async () => {
  const tbodyItems: ContentSummaryType[] = [];
  const result = await api<Content[]>(ENDPOINTS.CONTENTS);

  if (result) {
    result.map((content: Content) => {
      tbodyItems.push({
        img: { src: content.cartelImage, alt: content.title },
        title: content.title,
        type: content.type as ContentType,
        state: content.state as ContentState,
        uploadAt: "result.lastUpdated",
      });
    });
  }

  const allContents = {
    theadItems: ["Portada", "Título", "Tipo", "Estado", "Fecha de creación"],
    tbodyItems: tbodyItems,
  };

  return allContents;
};

export const getTabKeys = (): TabType[] => {
  return [
    { id: "all_contents", label: "Todo el contenido" },
    { id: "movies", label: "Películas" },
    { id: "series", label: "Series" },
    { id: "diaries", label: "Diarios" },
  ];
};

export const CONTENT_SERVICE_MAP: Record<string, () => Promise<ItemSetType>> = {
  all_contents: getAllContents,
  movies: getAllMovies,
  series: getAllSeries,
  diaries: getAllDiaries,
};
