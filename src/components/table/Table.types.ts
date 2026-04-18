export interface TableProps {
  animation: "left" | "right";
  theadItems: string[];
  tbodyItems: ContentSummaryType[];
}

export type ContentSummaryType = {
  img: { src: string; alt: string };
  title: string;
  type: ContentVariants;
  state: ContentStates;
  uploadAt: string;
};

export type ContentVariants = {
  key: "movie" | "serie" | "diarie";
};

export type ContentStates = {
  key: "published" | "featured" | "saved";
};
