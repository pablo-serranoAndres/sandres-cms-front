import type { HeadingProps } from "./Heading.types";
import styles from "./Heading.module.scss";

export const Heading = ({ tag, text }: HeadingProps) => {
  switch (tag) {
    case "h1":
      return (
        <div className={styles.header}>
          <h1>{text}</h1>
        </div>
      );
    case "h2":
      return (
        <div className={styles.header}>
          <h2>{text}</h2>
        </div>
      );
    case "h3":
      return (
        <div className={styles.header}>
          <h3>{text}</h3>
        </div>
      );

    default:
      break;
  }
};
