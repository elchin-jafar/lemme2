import styles from "./ingredients.module.css";
import img from "../../assets/ingredients/Frame.png";
import Button from "../../UI/Button/Button";
import { useProductStore } from "../../store/productStore";
import { usePopupStore } from "../../store/popupStore";
import ImgBase64 from "../../components/ImgBase64/ImgBase64";
import Popup from "../../components/Popup/Popup";

function Ingredients() {
  const productState = useProductStore((state) => state.product);
  const open = usePopupStore((state) => state.open);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <ImgBase64 data={productState?.images?.at(0)?.fileBase64} />
        </div>
        <div className={styles.right}>
          <p className={styles.header}>Kimyəvi inqridiyentlər</p>
          <p className={styles["info-text"]}>{productState?.ingredients}</p>
          {/* <Button to="..">Geriyə</Button> */}
          <Popup />
          <button onClick={open} className={styles["result-btn"]}>
            Geriyə
          </button>
        </div>
      </div>
    </>
  );
}

export default Ingredients;
