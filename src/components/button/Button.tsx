import { Link } from "react-router-dom";
import { Icon } from "@components";
import { type ButtonProps } from "./Button.types";
import { APP_PATHS } from "../../routes/path";
import classNames from "classnames";
import styles from "./Button.module.scss";

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
      {icon && (
        <Icon variant={icon.variant} color={icon.color} size={icon.size} />
      )}
      {text}
    </Link>
  ) : (
    <button className={clasNames} onClick={onclick} type={type}>
      {icon && (
        <Icon variant={icon.variant} color={icon.color} size={icon.size} />
      )}
      {text}
    </button>
  );
};
