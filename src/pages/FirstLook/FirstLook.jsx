import styles from "./firstLook.module.css";
import CustomSwiper from "../../components/Swiper/CustomSwiper";
import Button from "../../UI/Button/Button";
import { useProductStore } from "../../store/productStore";

import { IconContext } from "react-icons";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { Link } from "react-router-dom";

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
          <p className={styles["info-text"]}>{productState?.overview}</p>
          <Button to="..">Geriyə</Button>
        </div>
      </div>
    </>
  );
}

export default FirstLook;
