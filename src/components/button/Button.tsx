import { Link } from "react-router-dom";
import { Icon } from "@components";
import { type ButtonProps } from "./Button.types";
import { APP_PATHS } from "../../routes/path";
import classNames from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
  id,
  variant = "filled",
  size = "md",
  icon,
  type,
  text,
  link,
  onClick,
}: ButtonProps) => {
  const clasNames = classNames(styles.button, styles[variant], styles[size]);

  return link ? (
    <Link id={id} className={clasNames} to={APP_PATHS[link]}>
      {icon && (
        <Icon
          id={icon.id}
          variant={icon.variant}
          color={icon.color}
          size={icon.size}
        />
      )}
      {text}
    </Link>
  ) : (
    <button id={id} className={clasNames} onClick={onClick} type={type}>
      {icon && (
        <Icon
          id={icon.id}
          variant={icon.variant}
          color={icon.color}
          size={icon.size}
        />
      )}
      {text}
    </button>
  );
};
