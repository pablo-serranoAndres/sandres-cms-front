import type { ReactNode } from "react";
import { FaRegFileImage, FaRegStar, FaStar, FaVideo } from "react-icons/fa";
import { FcDvdLogo } from "react-icons/fc";
import {
  MdDelete,
  MdEdit,
  MdInfoOutline,
  MdNavigateNext,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { PiFilmStrip } from "react-icons/pi";
import { IoFilter } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";

export const ICON_MAP: Record<string, ReactNode> = {
  info: <MdInfoOutline />,
  picture: <FaRegFileImage />,
  strip: <PiFilmStrip />,
  film: <FaRegFileImage />,
  video: <FaVideo />,
  dvd: <FcDvdLogo />,
  navigation: <MdNavigateNext />,
  sort: <MdOutlineSort />,
  filter: <IoFilter />,
  add: <IoIosAddCircleOutline />,
  edit: <MdEdit />,
  featured: <FaStar />,
  not_featured: <FaRegStar />,
  delete: <MdDelete />,
  publish: <MdVisibility />,
  unpublish: <MdVisibilityOff />,
};
