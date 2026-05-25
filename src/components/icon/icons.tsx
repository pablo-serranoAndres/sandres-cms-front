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
import { IoCloseOutline, IoFilter, IoSearchSharp } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import { GrConfigure, GrFormNext, GrFormPrevious } from "react-icons/gr";
import { RiHome2Line } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { GoDatabase } from "react-icons/go";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ICON_MAP: Record<string, (props: any) => ReactNode> = {
  home: (props) => <RiHome2Line {...props} />,
  database: (props) => <GoDatabase {...props} />,
  users: (props) => <HiMiniUsers {...props} />,
  config: (props) => <GrConfigure {...props} />,
  info: (props) => <MdInfoOutline {...props} />,
  picture: (props) => <FaRegFileImage {...props} />,
  strip: (props) => <PiFilmStrip {...props} />,
  film: (props) => <FaRegFileImage {...props} />,
  video: (props) => <FaVideo {...props} />,
  dvd: (props) => <FcDvdLogo {...props} />,
  navigation: (props) => <MdNavigateNext {...props} />,
  sort: (props) => <MdOutlineSort {...props} />,
  filter: (props) => <IoFilter {...props} />,
  add: (props) => <IoIosAddCircleOutline {...props} />,
  edit: (props) => <MdEdit {...props} />,
  featured: (props) => <FaStar {...props} />,
  not_featured: (props) => <FaRegStar {...props} />,
  delete: (props) => <MdDelete {...props} />,
  publish: (props) => <MdVisibility {...props} />,
  unpublish: (props) => <MdVisibilityOff {...props} />,
  save: (props) => <FaSave {...props} />,
  next: (props) => <GrFormNext {...props} />,
  previous: (props) => <GrFormPrevious {...props} />,
  close: (props) => <IoCloseOutline {...props} />,
  search: (props) => <IoSearchSharp {...props} />,
};
