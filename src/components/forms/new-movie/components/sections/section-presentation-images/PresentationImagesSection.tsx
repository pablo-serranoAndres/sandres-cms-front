import { Icon } from "@components";
import styles from "./PresentationImagesSection.module.scss";

export const PresentationImagesSection = () => {
  return (
    <div className={styles.newMovie_movieImaging}>
      <h2>
        <Icon variant={"picture"} background={false} size={"bg"} />
        Imágenes de presentación
      </h2>
      <hr />

      <div className={styles.uploadingImages}>
        <div className={styles.verticalPoster}>
          <span>
            <Icon variant={"picture"} background={false} size={"sm"} />
          </span>
          <input type="file" />
        </div>
        <div className={styles.heroImage}>
          <span>
            <Icon variant={"picture"} background={false} size={"sm"} />
          </span>
          <input type="file" />
        </div>
      </div>
    </div>
  );
};
