import styles from "./firstLook.module.css";
import CustomSwiper from "../../components/Swiper/CustomSwiper";
import Button from "../../UI/Button/Button";
import { useProductStore } from "../../store/productStore";

function FirstLook() {
  const productState = useProductStore((state) => state.product);
  console.log("from first look", productState);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <CustomSwiper images={productState?.images} />
        </div>
        <div className={styles.right}>
          <p className={styles.header}>İlk baxışda</p>
          <p className={styles["info-text"]}>
            Üz üçün nəmləndirici serum <br /> Üz üçün nəmləndirici serum <br />{" "}
            Üz üçün nəmləndirici serum <br /> Üz üçün nəmləndirici serum
          </p>
          <Button to="..">Geriyə</Button>
        </div>
      </div>
    </>
  );
}

export default FirstLook;
