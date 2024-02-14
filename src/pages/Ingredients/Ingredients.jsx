import styles from "./ingredients.module.css";
import img from "../../assets/ingredients/Frame.png";

import Button from "../../UI/Button/Button";

function Ingredients() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={img} alt="" />
        </div>
        <div className={styles.right}>
          <p className={styles.header}>Kimyəvi inqridiyentlər</p>
          <p className={styles["info-text"]}>
            Exfoliants: Alpha Hydroxy Acids (AHAs) (e.g., glycolic acid, lactic
            acid): Exfoliate the skin's surface, promoting cell turnover.
            Penetrates oil to exfoliate inside the pores. Retinoids: Retinol: A
            derivative of vitamin A that collagen production and helps reduce
            collagen production and helps reduce collagen production and helps
            reduce
          </p>
          <Button to="/productMenu">Geriyə</Button>
        </div>
      </div>
    </>
  );
}

export default Ingredients;
