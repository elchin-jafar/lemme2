import styles from "./skinType.module.css";
import Models from "../../components/Models";
import { useState } from "react";
import { Link } from "react-router-dom";

function SkinType() {
  const [isActive, setIsActive] = useState({
    a: false,
    b: false,
    c: false,
  });

  function toggleActiveA() {
    setIsActive((prevState) => ({ a: !prevState.a, b: false, c: false }));
  }

  function toggleActiveB() {
    setIsActive((prevState) => ({ a: false, b: !prevState.b, c: false }));
  }

  function toggleActiveC() {
    setIsActive((prevState) => ({ a: false, b: false, c: !prevState.c }));
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Models />
      </div>
      <div className={styles.right}>
        <p className={styles.header}>Dəri tipim nədir?</p>

        <div className="questions">
          <p className={styles["question-text"]}>Dəriniz tez quruyur?</p>
          <p className={styles.answers}>
            <span
              className={`${styles.variant} ${
                isActive.a ? styles["variant-selected"] : ""
              }`}
              onClick={toggleActiveA}
            >
              A
            </span>
            <span>Bəli</span>{" "}
            <span
              className={`${styles.variant} ${
                isActive.b ? styles["variant-selected"] : ""
              }`}
              onClick={toggleActiveB}
            >
              B
            </span>{" "}
            <span>Xeyr</span>{" "}
            <span
              className={`${styles.variant} ${
                isActive.c ? styles["variant-selected"] : ""
              }`}
              onClick={toggleActiveC}
            >
              C
            </span>{" "}
            <span>Bəzən</span>
          </p>
        </div>

        <Link to="skin-type-res" className={styles["result-btn"]}>
          Nəticə
        </Link>
      </div>
    </div>
  );
}

export default SkinType;
