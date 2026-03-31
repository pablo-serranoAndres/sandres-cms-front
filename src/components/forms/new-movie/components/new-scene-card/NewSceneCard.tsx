import { UploadFileChip } from "@components";
import styles from "./NewSceneCard.module.scss";

export const NewSceneCard = () => {
  return (
    <div className={styles.newSceneCard}>
      <div className={styles.newSceneCard_files}>
        <UploadFileChip
          violetText={"Subir video"}
          greyText={"MP4, MOV (2GB Max)"}
          icon={{ variant: "picture", background: false, size: "md" }}
        />
        <UploadFileChip
          violetText={"Subir portada"}
          greyText={"JPG, PNG, JPEG (2GB Max)"}
          icon={{ variant: "picture", background: false, size: "md" }}
        />
      </div>

      <div className={styles.newSceneCard_data}>
        <div className={styles.inputBase}>
          <label>Orden de la escena</label>
          <input
            style={{ width: "30px" }}
            type="text"
            // required
          />
        </div>
        <div className={styles.inputBase}>
          <label>Título de la pelicula</label>
          <input
            type="text"
            placeholder="Ej: Obra de teatro de Mamá"
            // required
          />
        </div>
        <div className={styles.inputBase}>
          <label>Título de la pelicula</label>
          <textarea placeholder="Incluye un resumen detallado de la trama..." />
        </div>
        <div className={styles.inputBase}>
          <label>Etiquetas {"(separadas por comas)"}</label>
          <input type="text" placeholder="Ej: Obra de teatro de Mamá" />
        </div>
      </div>
    </div>
  );
};
