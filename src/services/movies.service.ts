import { api, ENDPOINTS } from "@api";
import type { Movie } from "@models";
import type { ContentState, ContentSummaryType, ContentType } from "@types";
import { formatDate } from "@utils";

export const getAllMovies = async (): Promise<ContentSummaryType[]> => {
  const tbodyItems: ContentSummaryType[] = [];
  const result = await api<Movie[]>(ENDPOINTS.MOVIES);

  if (result) {
    result.map((movie: Movie) => {
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
