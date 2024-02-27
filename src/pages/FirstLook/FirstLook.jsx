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

      <div className={styles.popup}>
        <p className={styles["popup-text"]}>
          Bu məlumat sizin üçün yararlı oldu?
        </p>
        <div className={styles.icons}>
          <IconContext.Provider value={{ color: "#17823B", size: "4.4rem" }}>
            <div>
              <BiSolidLike />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#E72F57", size: "4.4rem" }}>
            <div>
              <BiSolidDislike />
            </div>
          </IconContext.Provider>
        </div>
        <Link className={styles["popup-btn"]} to=".." relative="path">
          Geriyə
        </Link>
      </div>
    </>
  );
}

export default FirstLook;
