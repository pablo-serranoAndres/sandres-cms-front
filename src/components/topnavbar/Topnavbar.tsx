import styles from "./Topnavbar.module.scss";
import dumbImage from "../../assets/dumb-image.jpg";
import { Input } from "../input";

interface UserChipProps {
  name: string;
  role: "admin" | "editor" | "visitor";
  // img: { src: string; alt: string };
}
const UserChip = ({ name, role }: UserChipProps) => {
  return (
    <div className={styles.userChip}>
      <div className={styles.userChipText}>
        <span className={styles.userChipText_name}>{name}</span>
        <span className={styles.userChipText_role}>{role.toUpperCase()}</span>
      </div>
      <img src={dumbImage} alt={"Foto de perfil"} />
    </div>
  );
};

export const Topnavbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <form>
        <Input
          id={"search-all-contents"}
          type={"text"}
          placeholder="Buscar películas, series, diarios..."
          background={"transparent"}
        />
      </form>
      <UserChip name={"John Smith"} role={"admin"} />
    </div>
  );
};
