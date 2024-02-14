import Models from "../../components/Models/Models";
import Header from "../../components/Header/Header";
import Button from "../../UI/Button/Button";
import styles from "./skinTypeResult.module.css";

function SkinTypeResult() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Models />
      </div>
      <div className={styles.right}>
        <Header>Nəticə</Header>
        <p className={styles["main-result"]}>
          Sualların cavabına əsasən dəriniz qurudur.
        </p>
        <p className={styles.warning}>
          Unutmayın ki, bu suallar geniş bir rəhbər təmin edir və cildinizin
          tipini tam qiymətləndirmək üçün və ya xüsusi cild problemləriniz
          varsa, həmişə dermatoloqa müraciət etmək yaxşı fikirdir.
        </p>
        <Button to="/skin-type">Geriyə</Button>
      </div>
    </div>
  );
}

export default SkinTypeResult;
