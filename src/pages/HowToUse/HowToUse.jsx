import styles from "./howToUse.module.css";
import frame from "../../assets/productMenu/Frame.png";
import { Link } from "react-router-dom";
function HowToUse() {
  return (
    <>
      <div className={styles.container}>
        <div className="left">
          <img src={frame} alt="" />
        </div>
        <div className={styles.right}>
          <p className={styles.button}>İstifadə qaydası</p>
          <p className={styles.info}>
            Üz üçün köpuyu 3 dəqiqə ərzində dərinizə masaj edib su ilə yuyun.
          </p>
          <Link to={"/productMenu"} className={styles["back-btn"]}>
            Geriyə
          </Link>
        </div>
      </div>
    </>
  );
}
export default HowToUse;
