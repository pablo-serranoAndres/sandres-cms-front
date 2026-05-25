// export type ItemSetType = {
//   theadItems: string[];
//   tbodyItems: ContentSummaryType[];
// };

export type ContentSummaryType = {
  img: { src: string; alt: string };
  title: string;
  type: ContentType;
  state: ContentState;
  uploadAt: { date: string; hour: string };
};

export type ContentTabType = "all_contents" | "movies" | "series" | "diaries";

export type ContentType = "movie" | "serie" | "diarie";
export type ContentState = "published" | "featured" | "saved";

export type TabType = {
  id: string;
  label: string;
};

export type PaginationType = {
  currentSet: number[];
  totalPages: number;
  currentPage: number;
  onClick?: (pageNumber: number) => void;
};

export type PopoverType = { id: number; name: string; key: string };
