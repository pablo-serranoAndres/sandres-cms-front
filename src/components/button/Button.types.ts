export const APP_PATHS = {
  CONFIG: { pathname: "/config" },
  CONTENT: { pathname: "/content" },
  HOME: { pathname: "/" },
  USERS: { pathname: "/users" },
} as const;

export interface ButtonProps {
  variant: "filled" | "outlined" | "transparent";
  size: "bg" | "md" | "sm";
  icon?: React.ReactNode;
  text: string;
  link?: keyof typeof APP_PATHS;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}
