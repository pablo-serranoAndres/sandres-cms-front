import { api, ENDPOINTS } from "@api";
import type { Diarie } from "@models";
import type { ContentState, ContentSummaryType, ContentType } from "@types";
import { formatDate } from "@utils";

export const getAllDiaries = async (): Promise<ContentSummaryType[]> => {
  const tbodyItems: ContentSummaryType[] = [];
  const result = await api<Diarie[]>(ENDPOINTS.DIARIES);

  if (result) {
    result.map((movie: Diarie) => {
      tbodyItems.push({
        img: { src: movie.cartelImage, alt: movie.title },
        title: movie.title,
        type: movie.type as ContentType,
        state: movie.state as ContentState,
        uploadAt: formatDate(movie.lastUpdated),
      });
    });
  }

  return tbodyItems;
};
