import styles from "./Topnavbar.module.scss";
import dumbImage from "../../assets/dumb-image.jpg";
import { Input } from "@components";

export const Topnavbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Input label={""} />
      <UserChip name={"John Smith"} role={"admin"} />
    </div>
  );
};

interface UserChipProps {
  name: string;
  role: "admin" | "editor" | "visitor";
  // img: { src: string; alt: string };
}
const UserChip = (props: UserChipProps) => {
  return (
    <div className={styles.userChip}>
      <div className={styles.userChipText}>
        <span className={styles.userChipText_name}>{props.name}</span>
        <span className={styles.userChipText_role}>
          {props.role.toUpperCase()}
        </span>
      </div>
      <img src={dumbImage} alt={"Foto de perfil"} />
    </div>
  );
};
