import { IoInformationCircleOutline } from "react-icons/io5";
import styles from "./NewDiarieForm.module.scss";

export const NewDiarieForm = () => {
  return (
    <form>
      <div className={styles.diariInfo}>
        <span>
          <IoInformationCircleOutline />
          Información del Diario
        </span>
        <hr />
      </div>
    </form>
  );
};
