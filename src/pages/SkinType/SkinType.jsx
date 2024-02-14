import styles from "./skinType.module.css";
import Models from "../../components/Models/Models";
import Question from "../../components/Question/Question";
import Button from "../../UI/Button/Button";
import Header from "../../components/Header/Header";

function SkinType() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Models />
      </div>
      <div className={styles.right}>
        <Header>Dəri tipim nədir?</Header>

        <div className="questions">
          <Question question={"Dəriniz tez quruyur?"} />
          <Question question={"Dəriniz tez quruyur?"} />
          <Question question={"Dəriniz tez quruyur?"} />
          <Question question={"Dəriniz tez quruyur?"} />
        </div>

        <div className={styles["btn-container"]}>
          <Button to="/">Geriyə</Button>
          <Button to="skin-type-res">Nəticə</Button>
        </div>
      </div>
    </div>
  );
}

export default SkinType;
