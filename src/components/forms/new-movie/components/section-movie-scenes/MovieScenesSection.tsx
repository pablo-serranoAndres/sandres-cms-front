import { Icon } from "@components";
import { NewSceneCard } from "../new-scene-card";
import styles from "./MovieScenesSection.module.scss";

export const MovieScenesSection = () => {
  return (
    <div className={styles.newMovie_movieScenes}>
      <h2>
        <Icon variant={"strip"} background={false} size={"bg"} />
        Escenas de la Película
      </h2>
      <span className={styles.helpText}>
        {" "}
        Gestiona la colección de escenas que componen este título
      </span>
      <div className={styles.scenesColection}>
        <NewSceneCard />
      </div>
    </div>
  );
};
