import classNames from "classnames";
import styles from "./Badge.module.scss";
import type { ContentState, ContentType } from "@types";

const formatNames: Record<string, string> = {
  movie: "Pelicula",
  serie: "Serie",
  diarie: "Diario",
  published: "Publicado",
  featured: "Publicado",
  saved: "No publicada",
};
export const Badge = ({ value }: { value: ContentType | ContentState }) => {
  const clasNames = classNames(styles.badge, styles[`badge_${value}`]);

  return <span className={clasNames}>{formatNames[value] || value}</span>;
};
