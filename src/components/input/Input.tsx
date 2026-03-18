import styles from "./Input.module.scss";
import type { InputProps } from "./Input.types";

export const Input = (props: InputProps) => {
  return (
    <div className={styles.inputGroup}>
      {props.label && <label>{props.label}</label>}

      <input
        type="text"
        id="username"
        placeholder="Buscar películas, series, diarios..."
      />
    </div>
  );
};
