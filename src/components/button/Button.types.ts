import type { APP_PATHS } from "src/routes/path";
import type { IconProps } from "../icon";

export interface ButtonProps {
  id: string;
  variant: "filled" | "outlined" | "white" | "unstyled";
  size: "bg" | "md" | "sm";
  type: "button" | "submit" | "reset";
  icon?: IconProps;
  text: string;
  link?: keyof typeof APP_PATHS;
  onClick?: () => void;
}
