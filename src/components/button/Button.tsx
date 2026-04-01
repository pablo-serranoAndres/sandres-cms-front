import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { type ButtonProps } from "./Button.types";
import { APP_PATHS } from "../../routes/path";

export const Button = ({
  variant = "filled",
  size = "md",
  icon,
  type,
  text,
  link,
  onclick,
}: ButtonProps) => {
  const clasNames = classNames(styles.button, styles[variant], styles[size]);

  return link ? (
    <Link className={clasNames} to={APP_PATHS[link]}>
      {icon && <span>{icon}</span>}
      {text}
    </Link>
  ) : (
    <button className={clasNames} onClick={onclick} type={type}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};
