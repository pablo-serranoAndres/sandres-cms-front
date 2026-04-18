import classNames from "classnames";
import type { ContentStates, ContentVariants } from "../table/Table.types";
import styles from "./Badge.module.scss";

const formatNames: Record<string, string> = {
  movie: "Pelicula",
  serie: "Serie",
  diarie: "Diario",
  published: "Publicado",
  featured: "Publicado",
  saved: "No publicada",
};
export const Badge = ({
  value,
}: {
  value: ContentVariants | ContentStates;
}) => {
  const clasNames = classNames(styles.badge, styles[`badge_${value.key}`]);

  return (
    <span className={clasNames}>{formatNames[value.key] || value.key}</span>
  );
};
