import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { APP_PATHS, type ButtonProps } from "./Button.types";

export const Button = ({
  variant = "outlined",
  size = "md",
  text,
  icon,
  link,
  onclick,
}: ButtonProps) => {
  const clasNames = classNames(styles[variant], styles[size]);
  return link ? (
    <Link className={clasNames} to={APP_PATHS[link]}>
      {icon} {text}
    </Link>
  ) : (
    <button className={clasNames} onClick={onclick}>
      {icon} {text}
    </button>
  );
};
