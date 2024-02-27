import styles from "./howToUse.module.css";
import Button from "../../UI/Button/Button";
import { useProductStore } from "../../store/productStore";
import ImgBase64 from "../../components/ImgBase64/ImgBase64";

function HowToUse() {
  const productState = useProductStore((state) => state.product);
  console.log("log from how to use", productState);
  return (
    <>
      <div className={styles.container}>
        <div className="left">
          <ImgBase64 data={productState?.images?.at(0)?.fileBase64} />
        </div>
        <div className={styles.right}>
          <p className={styles.button}>İstifadə qaydası</p>
          <p className={styles.info}>{productState.howToUse}</p>
          <Button to=".." className={styles["back-btn"]}>
            Geriyə
          </Button>
        </div>
      </div>
    </>
  );
}
export default HowToUse;
