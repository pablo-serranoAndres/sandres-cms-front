import type {
  ContentTabType,
  ContentSummaryType,
  PaginationType,
} from "@types";

export interface ActiveItemsProps {
  id: ContentTabType;
  dataset: ContentSummaryType[];
  previousOrder: number;
  currentOrder: number;
  pagination: PaginationType;
}
