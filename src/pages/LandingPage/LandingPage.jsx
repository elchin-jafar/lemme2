import styles from "./landingPage.module.css";
import firstImage from "../../assets/landingPics/first.png";
import secondImage from "../../assets/landingPics/second.png";
import thirdImage from "../../assets/landingPics/third.png";
import qrCode from "../../assets/landingPics/qrCode.png";
import searchIcon from "../../assets/landingPics/searchIcon.svg";
import { Link } from "react-router-dom";
import { getProductByName } from "../../utils/apiUtils";
import debounce from "../../utils/debounce";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  // const navigate = useNavigate();

  const debounceOnChange = useCallback(debounce(onChange, 400), []);

  const searchProduct = async (value) => {
    const response = await getProductByName(value);
    const data = response.data;
    console.log(data);
  };

  function onChange(value) {
    value && searchProduct(value);
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
          onChange={(e) => debounceOnChange(e.target.value)}
        />
      </div>
      <Link to="/skin-type" className={styles["goto-skin-type"]}>
        Dəri tipimi necə müəyyən edə bilərəm
      </Link>
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
