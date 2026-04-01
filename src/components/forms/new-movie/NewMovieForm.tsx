import { GeneralInfoSection, SubmitArea } from "./components";

import styles from "./NewMovie.module.scss";

export const NewMovieForm = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData.get("title"));
    console.log(formData.get("description"));
    console.log(formData.get("categorie"));
    console.log(formData.get("tags"));
  };

  return (
    <section className={styles.formPage}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <SubmitArea header={true} />
        <GeneralInfoSection />
        {/* <PresentationImagesSection />
        <MovieScenesSection />
        <SubmitArea header={false} /> */}
      </form>
    </section>
  );
};
