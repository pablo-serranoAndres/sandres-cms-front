import { api, ENDPOINTS } from "@api";
import type { Serie } from "@models";
import type { ContentState, ContentSummaryType, ContentType } from "@types";
import { formatDate } from "@utils";

export const getAllSeries = async (): Promise<ContentSummaryType[]> => {
  const tbodyItems: ContentSummaryType[] = [];
  const result = await api<Serie[]>(ENDPOINTS.SERIES);

  if (result) {
    result.map((movie: Serie) => {
      tbodyItems.push({
        img: { src: movie.cartelImage, alt: movie.title },
        title: movie.title,
        type: movie.type as ContentType,
        state: movie.state as ContentState,
        uploadAt: formatDate(movie.lastUpdated),
      });
    });
  }

  //   const allMovies = tbodyItems;

  return tbodyItems;
};
