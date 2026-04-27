import type { TabType } from "@types";

export interface TabsProps {
  tabs: TabType[];
  focusTab: number;
  onClick: (id: string, index: number) => void;
  children: React.ReactNode;
}
