import type { APP_PATHS } from "src/routes/path";

export interface ButtonProps {
  variant: "filled" | "outlined" | "transparent";
  size: "bg" | "md" | "sm";
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  text: string;
  link?: keyof typeof APP_PATHS;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}
