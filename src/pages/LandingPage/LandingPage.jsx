import styles from "./landingPage.module.css";

import firstImage from "../../assets/landingPics/first.png";
import secondImage from "../../assets/landingPics/second.png";
import thirdImage from "../../assets/landingPics/third.png";

function LandingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Lemme</h1>
      <input
        type="text"
        className={styles["main-search-input"]}
        placeholder="Mehsulun adi"
      />
      <input
        type="text"
        className={styles["main-search-input"]}
        placeholder="Deri tipimi nece mueyyen ede bilerem"
      />
      <div className={styles["img-container"]}>
        <img src={firstImage} alt="broken" />
        <img src={secondImage} alt="" className={styles["second-img"]} />
        <img src={thirdImage} alt="" className={styles["third-img"]} />
      </div>
    </div>
  );
}

export default LandingPage;
