import styles from "./models.module.css";

import Smodel from "../../assets/modelPics/Smodel.png";
import Mmodel from "../../assets/modelPics/Mmodel.png";
import Lmodel from "../../assets/modelPics/Lmodel.png";

function Models() {
  return (
    <div className={styles.images}>
      <div className={`${styles["img-holder"]} ${styles.img1}`}>
        <img src={Smodel} alt="" />
      </div>
      <div className={`${styles["img-holder"]} ${styles.img2}`}>
        <img src={Mmodel} alt="" />
      </div>
      <div className={`${styles["img-holder"]} ${styles.img3}`}>
        <img src={Lmodel} alt="" />
      </div>
    </div>
  );
}

export default Models;
