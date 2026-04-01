import type { InputProps } from "./Input.types";
import styles from "./Input.module.scss";
import classNames from "classnames";

export const Input = ({
  id,
  type,
  label,
  placeholder,
  name,
  defaultValue,
  options,
  background = "transparent",
}: InputProps) => {
  const clasNames = classNames(styles.inputContainer, styles[background]);

  switch (type) {
    case "textarea":
      return (
        <div className={clasNames}>
          {label && <label>{label}</label>}
          <textarea
            id={id}
            className={styles.inputContainer_textarea}
            placeholder={placeholder}
          ></textarea>
        </div>
      );

    case "select":
      return (
        <div className={clasNames}>
          {label && <label>{label}</label>}
          <select
            id={id}
            defaultValue={defaultValue}
            className={styles.inputContainer_input}
          >
            {options?.map((option) => (
              <option key={option.id} id={option.id} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return (
        <div className={clasNames}>
          {label && <label>{label}</label>}
          <input
            id={id}
            className={styles.inputContainer_input}
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </div>
      );
  }
};
