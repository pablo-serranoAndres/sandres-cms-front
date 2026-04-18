import type { MouseEventHandler } from "react";

export interface TabsProps {
  tabs: TabType[];
  focusTab: number;
  onChange: MouseEventHandler<HTMLLIElement>;
  children: React.ReactNode;
}

type TabType = {
  id: string;
  value: string;
};
