import styles from "./PageNotFound.module.css";
import Astronaut from "../assets/images/shared/astronaut.png";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className={styles.page}>
      <div className={`animationWrapper ${styles.image}`}>
        <img src={Astronaut} alt="404" />
      </div>
      <div className={styles.content}>
        <h1>404 - Lost in Space</h1>
        <h2>It looks like you've drifted into uncharted territory.</h2>
      </div>
      <Link to="/">
        <button className={styles.button}>Take me home</button>
      </Link>
    </main>
  );
}
