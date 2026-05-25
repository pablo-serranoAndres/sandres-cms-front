import classNames from "classnames";

import type { IconProps } from "./Icon.types";
import styles from "./Icon.module.scss";
import { ICON_MAP } from "./icons";

const Icon = ({ variant, size, color, id }: IconProps) => {
  const clasNames = classNames(
    styles.iconContainer,
    styles[size],
    styles[color],
  );

  return <div className={clasNames}>{ICON_MAP[variant]({ id })}</div>;
};

export { ICON_MAP, Icon };
