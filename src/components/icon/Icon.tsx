import classNames from "classnames";
import type { IconProps } from "./Icon.types";
import type { ReactNode } from "react";
import { FaRegFileImage, FaVideo } from "react-icons/fa";
import { FcDvdLogo } from "react-icons/fc";
import { MdInfoOutline, MdNavigateNext } from "react-icons/md";
import styles from "./Icon.module.scss";
import { PiFilmStrip } from "react-icons/pi";

const ICON_MAP: Record<string, ReactNode> = {
  info: <MdInfoOutline />,
  picture: <FaRegFileImage />,
  strip: <PiFilmStrip />,
  film: <FaRegFileImage />,
  video: <FaVideo />,
  dvd: <FcDvdLogo />,
  navigation: <MdNavigateNext />,
};

export const Icon = ({
  variant = "info",
  background,
  size = "md",
}: IconProps): ReactNode => {
  const clasNames = classNames(
    styles[background ? "background_true" : "background_false"],
    styles[size],
  );

  return <div className={clasNames}>{ICON_MAP[variant]}</div>;
};
