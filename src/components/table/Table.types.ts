import type { ContentSummaryType, PaginationType } from "@types";

export interface TableProps {
  animation: "left" | "right";
  theadItems: string[];
  tbodyItems: ContentSummaryType[];
  pagination?: PaginationType;
}
