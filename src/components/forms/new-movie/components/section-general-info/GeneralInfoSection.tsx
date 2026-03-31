import { Icon, UploadFileChip } from "@components";
import styles from "./GeneralInfoSection.module.scss";

export const GeneralInfoSection = () => {
  return (
    <div className={styles.newMovie_generalInfo}>
      <h2>
        <Icon variant={"info"} background={false} size={"bg"} />
        Información General
      </h2>

      <div className={styles.inputBase}>
        <label>Título de la pelicula</label>
        <input
          type="text"
          name="title"
          placeholder="Ej: Obra de teatro de Mamá"
        />
      </div>

      <div className={styles.inputBase}>
        <label>Título de la pelicula</label>
        <textarea
          name="description"
          placeholder="Incluye un resumen detallado de la trama..."
        />
      </div>

      <div className={styles.doubleColumnInput}>
        <div className={styles.inputBase}>
          <label>Categoría</label>
          <select defaultChecked name="categorie">
            <option>Celebraciones</option>
            <option>Deportes</option>
            <option>Familia</option>
            {/* <option>Fotos</option> */}
            <option>Guillermo</option>
            <option>Pablo</option>
            <option>Sara</option>
            <option>Teatro</option>
            <option>Varios</option>
            <option>Viajes</option>
          </select>
        </div>
        <div className={styles.inputBase}>
          <label>Etiquetas {"(separadas por comas)"}</label>
          <input
            type="text"
            name="tags"
            placeholder="Ej: Obra de teatro de Mamá"
          />
        </div>
      </div>
      <UploadFileChip
        violetText={"Versión DVD"}
        greyText={"ISO(2GB Max)"}
        icon={{ variant: "dvd", background: true, size: "bg" }}
      />
    </div>
  );
};
