import styles from "./customSwiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";
import { Navigation } from "swiper/modules";
import ImgBase64 from "../ImgBase64/ImgBase64";

function CustomSwiper({ images }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles["my-swiper"]}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <ImgBase64 data={image.fileBase64} alt={image.productName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CustomSwiper;
