export interface IconProps {
  variant:
    | "info"
    | "pictures"
    | "picture"
    | "film"
    | "video"
    | "dvd"
    | "strip"
    | "navigation";
  background: boolean;
  color: "primary" | "secondary" | "base";
  size: "sm" | "md" | "bg";
}
