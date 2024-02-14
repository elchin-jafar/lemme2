import styles from "./customSwiper.module.css";

import img1 from "../../assets/swiper/slide1.png";
import img2 from "../../assets/swiper/slide2.png";
import img3 from "../../assets/swiper/slide3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";
import { Navigation } from "swiper/modules";

function CustomSwiper() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles["my-swiper"]}
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CustomSwiper;
