import { Button, Icon } from "@components";
import styles from "./SubmitArea.module.scss";

export const SubmitArea = ({ header }: { header: boolean }) => {
  return (
    <div className={styles.submitArea}>
      {header && (
        <div>
          <span>
            <a href="/content">CONTENIDO</a>
            <Icon variant={"navigation"} background={false} size={"sm"} /> NUEVA
            PELÍCULA
          </span>
          <h1>Nueva película</h1>
        </div>
      )}

      <div className={styles.submitArea_buttons}>
        <Button variant={"transparent"} size={"md"} text={"Descartar"} />
        <Button variant={"outlined"} size={"md"} text={"Guardar película"} />
        <Button variant={"filled"} size={"md"} text={"Publicar"} />
        <input type="submit" value={"Enviar!"} />
      </div>
    </div>
  );
};
