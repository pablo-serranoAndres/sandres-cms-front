import type { IconProps } from "../icon";

export interface TextProps {
  tag: "h1" | "h2" | "h3" | "label" | "p" | "span";
  text: string;
  icon?: IconProps;
  //   weight: string;
  //   spacing: string;
}
