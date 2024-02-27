import styles from "./productMenu.module.css";
import { Link } from "react-router-dom";
import { getProductById } from "../../utils/apiUtils";
import { useLoaderData } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import ImgBase64 from "../../components/ImgBase64/ImgBase64";

function ProductMenu() {
  const productData = useLoaderData();
  const updateState = useProductStore((state) => state.update);
  updateState(productData);
  console.log(productData);
  return (
    <>
      <div className={styles.container}>
        <div className="left">
          <ImgBase64
            data={productData?.images.at(0)?.fileBase64}
            alt="product photo"
          />
        </div>
        <div className={styles.right}>
          <Link to={"first-look"} className={styles.button}>
            İlk baxışda
          </Link>
          <Link to={"ingredients"} className={styles.button}>
            İnqridiyentlər
          </Link>
          <Link to={"how-to-use"} className={styles.button}>
            İstifadə qaydası
          </Link>
          <Link to={"/"} className={styles["back-btn"]}>
            Geriyə
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductMenu;

export async function productMenuLoader({ params }) {
  const res = await getProductById(params.id);
  return res.data;
}
