import { MdInfoOutline, MdNavigateNext } from "react-icons/md";
import styles from "./NewMovie.module.scss";
import { Button } from "@components";
import { IoIosImages } from "react-icons/io";
import { FaRegFileImage, FaVideo } from "react-icons/fa";
import { PiFilmStrip } from "react-icons/pi";
import type { ReactNode } from "react";

export const NewMovieForm = () => {
  return (
    <section className={styles.formPage}>
      <form>
        <div className={styles.submitArea}>
          <div>
            <span>
              <a href="/content">CONTENIDO</a>
              <MdNavigateNext /> NUEVA PELÍCULA
            </span>
            <h1>Nueva película</h1>
          </div>
          <div className={styles.submitArea_buttons}>
            <Button variant={"transparent"} size={"md"} text={"Descartar"} />
            <Button
              variant={"outlined"}
              size={"md"}
              text={"Guardar película"}
            />
            <Button variant={"filled"} size={"md"} text={"Publicar"} />
          </div>
        </div>
        <div className={styles.newMovie_generalInfo}>
          <h2>
            <MdInfoOutline /> Información General
          </h2>

          <div className={styles.inputBase}>
            <label>Título de la pelicula</label>
            <input
              type="text"
              placeholder="Ej: Obra de teatro de Mamá"
              required
            />
          </div>

          <div className={styles.inputBase}>
            <label>Título de la pelicula</label>
            <textarea placeholder="Incluye un resumen detallado de la trama..." />
          </div>

          <div className={styles.doubleColumnInput}>
            <div className={styles.inputBase}>
              <label>Categoría</label>
              <select defaultChecked>
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
              <input type="text" placeholder="Ej: Obra de teatro de Mamá" />
            </div>
          </div>
        </div>
        <div className={styles.newMovie_movieImaging}>
          <h2>
            <IoIosImages />
            Imágenes de presentación
          </h2>
          <hr />

          <div className={styles.uploadingImages}>
            <div className={styles.verticalPoster}>
              <span>
                <CustomDecoInput variant="cartel" />
              </span>
              <input type="file" />
            </div>
            <div className={styles.heroImage}>
              <span>
                <CustomDecoInput variant="cartel" />
              </span>
              <input type="file" />
            </div>
          </div>
        </div>
        <div className={styles.newMovie_movieScenes}>
          <h2>
            <PiFilmStrip /> Escenas de la Película
          </h2>
          <span className={styles.helpText}>
            {" "}
            Gestiona la colección de escenas que componen este título
          </span>
          <div className={styles.scenesColection}>
            <NewSceneCard />
          </div>
        </div>
      </form>
    </section>
  );
};

const CustomDecoInput = ({ variant }: { variant: "cartel" | "hero" }) => {
  return variant === "cartel" ? (
    <div className={styles.decoContent}>
      <FaRegFileImage />
      <span className={styles.decoContent_sizesText}>1000X1500PX</span>
      <span className={styles.decoContent_featuredText}>
        Haga click para subir
      </span>
    </div>
  ) : (
    <div>
      <FaRegFileImage />
      <span className={styles.decoContent_sizesText}>1000X1500PX</span>
      <span className={styles.decoContent_featuredText}>
        Haga click para subir
      </span>
    </div>
  );
};

const icons = new Map<string, ReactNode>([
  ["info", <FaRegFileImage />],
  ["pictures", <FaRegFileImage />],
  ["picture", <FaRegFileImage />],
  ["film", <FaRegFileImage />],
  ["video", <FaVideo />],
]);

const UploadFileChip = ({
  violetText,
  greyText,
  icon,
}: {
  violetText: string;
  greyText: string;
  icon: string;
}) => {
  return (
    <div className={styles.uploadChip}>
      <input type="file" />
      <span>{icons.get(icon)}</span>
      <div className={styles.uploadChip_text}>
        <p className={styles.uploadChip_text_violet}>{violetText}</p>
        <p className={styles.uploadChip_text_grey}>{greyText}</p>
        <p className={styles.uploadChip_text_uploadRoute}>
          /src/uploads/archivo
        </p>
      </div>
    </div>
  );
};

const NewSceneCard = () => {
  return (
    <div className={styles.newSceneCard}>
      <div className={styles.newSceneCard_files}>
        <UploadFileChip
          violetText={"Subir video"}
          greyText={"MP4, MOV (2GB Max)"}
          icon={"video"}
        />
        <UploadFileChip
          violetText={"Subir portada"}
          greyText={"JPG, PNG, JPEG (2GB Max)"}
          icon={"picture"}
        />
      </div>

      <div className={styles.newSceneCard_data}>
        <div className={styles.inputBase}>
          <label>Título de la pelicula</label>
          <input
            type="text"
            placeholder="Ej: Obra de teatro de Mamá"
            required
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
