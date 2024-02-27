import styles from "./ImgBase64.module.css";

// Converts image from base64 to jpeg

function ImgBase64({ data, alt }) {
  return (
    <img
      className={styles["product-img"]}
      src={`data:image/jpeg;base64,${data}`}
      alt={alt}
    />
  );
}

export default ImgBase64;
