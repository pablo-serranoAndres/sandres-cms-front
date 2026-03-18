import styles from "./NewSerieForm.module.scss";

export const NewSerieForm = () => {
  return (
    <section className={styles.formPage}>
      <div className={styles.newMovie_generalInfo}></div>
      <div className={styles.newMovie_principalMedia}></div>
      <div className={styles.newMovie_movieScenes}></div>
    </section>
  );
};
