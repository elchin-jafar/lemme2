import styles from "./productMenu.module.css";
import frame from "../../assets/productMenu/Frame.png";
import { Link } from "react-router-dom";

function ProductMenu() {
  return (
    <>
      <div className={styles.container}>
        <div className="left">
          <img src={frame} alt="" />
        </div>
        <div className={styles.right}>
          <Link to={"first-look"} className={styles.button}>
            Bir baxışda
          </Link>
          <Link to={"ingredients"} className={styles.button}>
            İnqridiyentlər
          </Link>
          <Link to={"how-to-use"} className={styles.button}>
            İstifadə qaydası
          </Link>
          <Link to={"/"} className={styles["back-btn"]}>
            Geriyə
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductMenu;
