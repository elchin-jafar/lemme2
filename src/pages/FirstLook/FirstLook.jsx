import styles from "./firstLook.module.css";
import CustomSwiper from "../../components/Swiper/CustomSwiper";
import Button from "../../UI/Button/Button";

function FirstLook() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <CustomSwiper />
        </div>
        <div className={styles.right}>
          <p className={styles.header}>İlk baxışda</p>
          <p className={styles["info-text"]}>
            Üz üçün nəmləndirici serum <br /> Üz üçün nəmləndirici serum <br />{" "}
            Üz üçün nəmləndirici serum <br /> Üz üçün nəmləndirici serum
          </p>
          <Button to="/productMenu">Geriyə</Button>
        </div>
      </div>
    </>
  );
}

export default FirstLook;
