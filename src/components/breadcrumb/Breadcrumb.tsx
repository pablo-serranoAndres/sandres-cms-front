import { Link } from "react-router-dom";
import { Icon } from "@components";
import styles from "./Breadcrumb.module.scss";

export const Breadcrumb = ({
  links,
}: {
  links: { url: string; name: string }[];
}) => {
  return (
    <nav className={styles.breadcrumb}>
      {links.map((link, index) =>
        index === links.length - 1 ? (
          <span key={`${link}-${index}`}>{link.name}</span>
        ) : (
          <span key={`${link}-${index}`} className={styles.link}>
            <Link to={link.url}>{link.name}</Link>
            <Icon
              variant={"navigation"}
              background={false}
              size={"sm"}
              color={"secondary"}
            />
          </span>
        ),
      )}
    </nav>
  );
};
