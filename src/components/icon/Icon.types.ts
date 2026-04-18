import type { ICON_MAP } from "./Icon";

export interface IconProps {
  variant: keyof typeof ICON_MAP;
  color: "primary" | "white" | "black" | "grey" | "transparent";
  size: "sm" | "md" | "bg";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
