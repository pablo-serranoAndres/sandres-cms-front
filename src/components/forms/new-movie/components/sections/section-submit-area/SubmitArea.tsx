import { Breadcrumb, Button, Text } from "@components";
import styles from "./SubmitArea.module.scss";

export const SubmitArea = ({ header }: { header: boolean }) => {
  return (
    <div className={styles.submitArea}>
      {header && (
        <div className={styles.submitArea_text}>
          <Breadcrumb
            links={[
              { name: "Contenido", url: "/content" },
              { name: "Nueva película", url: "" },
            ]}
          />
          <Text tag={"h1"} text={"Nueva película"} />
        </div>
      )}

      <div className={styles.submitArea_buttons}>
        <Button
          variant={"transparent"}
          size={"sm"}
          text={"Descartar"}
          type={"submit"}
        />
        <Button
          variant={"outlined"}
          size={"sm"}
          text={"Guardar película"}
          type={"button"}
        />
        <Button
          variant={"filled"}
          size={"sm"}
          text={"Publicar"}
          type={"submit"}
        />
        <input type="submit" value={"Enviar!"} />
      </div>
    </div>
  );
};
