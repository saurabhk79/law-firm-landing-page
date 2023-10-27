import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./reviews.module.css";
import { ReactComponent as RightArrow } from "../../assets/right.svg";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [isEnd, swiper, swiper.isEnd]);

  return (
    <div
      className={styles.rightNavigation}
      style={{
        backgroundColor: isEnd ? "var(--color-white)" : "var(--color-primary)",
      }}
      onClick={() => swiper.slideNext()}
    >
      <RightArrow />
    </div>
  );
};

export default CarouselRightNavigation;
