import { api, ENDPOINTS } from "@api";
import type {
  ContentState,
  ContentSummaryType,
  ContentTabType,
  ContentType,
  TabType,
} from "@types";
import { formatDate } from "@utils";
import type { Content } from "src/models/Content";

export const getAllContents = async (): Promise<ContentSummaryType[]> => {
  const tbodyItems: ContentSummaryType[] = [];
  const result = await api<Content[]>(ENDPOINTS.CONTENTS);

  if (result) {
    for (let i = 0; i < result.length; i++) {
      tbodyItems.push({
        img: { src: result[i].cartelImage, alt: result[i].title },
        title: result[i].title,
        type: result[i].type as ContentType,
        state: result[i].state as ContentState,
        uploadAt: formatDate(result[i].lastUpdated),
      });
    }
  }

  return tbodyItems;
};

export const getTabKeys = (): TabType[] => {
  return [
    { id: "all_contents", label: "Todo el contenido" },
    { id: "movies", label: "Películas" },
    { id: "series", label: "Series" },
    { id: "diaries", label: "Diarios" },
  ];
};

export const getContentCount = (content: ContentTabType): number => {
  let result: number;

  switch (content) {
    case "all_contents":
      result = 23;
      return result;

    case "diaries":
      result = 16;
      return result;

    case "movies":
      result = 10;
      return result;

    case "series":
      result = 14;
      return result;

    default:
      result = 0;
      return result;
  }
};
