import styles from "./question.module.css";
import { useState } from "react";

function Question({ question }) {
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
    <>
      <p className={styles["question-text"]}>{question}</p>
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
    </>
  );
}

export default Question;
