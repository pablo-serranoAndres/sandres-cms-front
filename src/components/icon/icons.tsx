import type { ReactNode } from "react";
import {
  FaRegFileImage,
  FaRegStar,
  FaSave,
  FaStar,
  FaVideo,
} from "react-icons/fa";
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
import { GrConfigure, GrFormNext, GrFormPrevious } from "react-icons/gr";
import { RiHome2Line } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { GoDatabase } from "react-icons/go";

export const ICON_MAP: Record<string, ReactNode> = {
  home: <RiHome2Line />,
  database: <GoDatabase />,
  users: <HiMiniUsers />,
  config: <GrConfigure />,
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
  save: <FaSave />,
  next: <GrFormNext />,
  previous: <GrFormPrevious />,
};
