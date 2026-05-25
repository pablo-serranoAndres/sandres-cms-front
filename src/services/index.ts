import type { ContentSummaryType } from "@types";

import { getAllContents } from "./content.service";
import { getAllMovies } from "./movies.service";
import { getAllDiaries } from "./diaries.service";
import { getAllSeries } from "./series.service";

export * from "./categories.service";
export * from "./content.service";

export const CONTENT_SERVICE_MAP: Record<
  string,
  () => Promise<ContentSummaryType[]>
> = {
  all_contents: getAllContents,
  movies: getAllMovies,
  series: getAllSeries,
  diaries: getAllDiaries,
};
