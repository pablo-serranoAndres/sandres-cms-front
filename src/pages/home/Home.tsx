import { useParams } from "react-router-dom";
import styles from "./Home.module.scss";

export const Home = () => {
  const { type } = useParams<{ type: string }>();
  console.log(type);
  return (
    <section className={styles.generalContainer}>
      <h1>Dashboard</h1>
    </section>
  );
};
