import styles from "./landingPage.module.css";
import firstImage from "../../assets/landingPics/first.png";
import secondImage from "../../assets/landingPics/second.png";
import thirdImage from "../../assets/landingPics/third.png";
import qrCode from "../../assets/landingPics/qrCode.png";
import searchIcon from "../../assets/landingPics/searchIcon.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleProductName(event) {
    if (event.key == "Enter") {
      navigate("/productMenu");
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Lemme</h1>
      <div className={styles["search-input-container"]}>
        <img src={searchIcon} alt="" className={styles["search-icon"]} />
        <input
          type="text"
          className={styles["main-search-input"]}
          placeholder="Məhsulun adı"
          onKeyDown={handleProductName}
        />
      </div>
      <input
        type="text"
        className={styles["main-search-input"]}
        placeholder="Dəri tipimi necə müəyyən edə bilərəm"
      />
      <div className={styles["img-container"]}>
        <img src={firstImage} alt="broken" />
        <img src={secondImage} alt="" className={styles["second-img"]} />
        <img src={thirdImage} alt="" className={styles["third-img"]} />
      </div>
      <img src={qrCode} alt="" />
      <p className={styles.text}>Skan et</p>
    </div>
  );
}

export default LandingPage;
