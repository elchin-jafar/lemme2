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
          <Question question={"Təmizləndikdən sonra dəriniz necə hiss edir?"} />
          <Question
            question={"Nə qədər tez-tez qırışlar və ya ləkələr yaşayırsınız?"}
          />
          <Question question={"Dəriniz günəşə necə reaksiya verir?"} />
          <Question question={"Dərinizin quruluşu necədir?"} />
          <Question
            question={
              "Nəmləndirici tətbiq etdikdən bir neçə saat sonra dəriniz necə hiss edir?"
            }
          />
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
