import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Typography } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import styles from "./reviews.module.css";

import review1 from "../../assets/review1.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <Typography variant={"h4"}>
        What says our <br /> happy Clients
      </Typography>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Navigation]}
        className={styles.myswiper}
      >
        <div className={styles.btns}>
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
        </div>
        <SwiperSlide>
          <Card image={review1} position={"CEO of Hunt"} name={"Jane Cooper"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={review2} position={"CEO of Hunt"} name={"Devon Lane"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={review3} position={"CEO of Hunt"} name={"Robert Fox"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
