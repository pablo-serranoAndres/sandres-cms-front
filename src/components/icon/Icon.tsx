import classNames from "classnames";

import type { IconProps } from "./Icon.types";
import styles from "./Icon.module.scss";
import { ICON_MAP } from "./icons";

const Icon = ({ variant, size, color, onClick }: IconProps) => {
  const clasNames = classNames(styles[size], styles[color]);

  return (
    <div className={clasNames} onClick={onClick}>
      {ICON_MAP[variant]}
    </div>
  );
};

export { ICON_MAP, Icon };
