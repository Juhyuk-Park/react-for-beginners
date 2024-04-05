import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div id={styles.container}>
      <span>
        <Link className={styles.link} to="/">
          Home
        </Link>
      </span>
      <span>
        <Link className={styles.link} to="/about">
          About
        </Link>
      </span>
    </div>
  );
}

export default Nav;
