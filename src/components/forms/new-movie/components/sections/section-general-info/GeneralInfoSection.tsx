import { Input, UploadFileChip } from "@components";
import { FormSectionContainer } from "../../../../components/form-section-container";
import styles from "./GeneralInfoSection.module.scss";

export const GeneralInfoSection = () => {
  return (
    <FormSectionContainer
      sectionTitle={"Información general"}
      iconVariant={"info"}
    >
      <Input
        id="movie-title"
        type={"text"}
        name="title"
        placeholder="Ej: Obra de teatro de Mamá"
        label="Título de la película"
        background={"filled"}
      />

      <Input
        id="movie-description"
        type={"textarea"}
        name="title"
        placeholder="Ej: Obra de teatro de Mamá"
        label="Descripción de la película"
        background={"filled"}
      />

      <div className={styles.doubleColumnInput}>
        <Input
          id="movie-description"
          type={"select"}
          name="familia"
          label="Categoría principal"
          defaultValue="celebraciones"
          options={[
            {
              id: "celebraciones",
              value: "celebraciones",
              text: "Celebraciones",
            },
            { id: "deportes", value: "deportes", text: "Deportes" },
            { id: "familia", value: "familia", text: "Familia" },
            { id: "fotos", value: "fotos", text: "Fotos" },
            { id: "guillermo", value: "guillermo", text: "Guillermo" },
            { id: "pablo", value: "pablo", text: "Pablo" },
            { id: "sara", value: "sara", text: "Sara" },
            { id: "teatro", value: "teatro", text: "Teatro" },
            { id: "varios", value: "varios", text: "Varios" },
            { id: "viajes", value: "viajes", text: "Viajes" },
          ]}
          background={"filled"}
        />
        <Input
          id="movie-description"
          type={"text"}
          name="tags"
          placeholder="Judes, 1991, Boda, Granada..."
          label="Etiquetas (separadas por comas)"
          background={"filled"}
        />
      </div>
      <UploadFileChip
        violetText={"Versión DVD"}
        greyText={"ISO(2GB Max)"}
        icon={{ variant: "dvd", background: true, size: "bg", color: "base" }}
      />
    </FormSectionContainer>
  );
};
