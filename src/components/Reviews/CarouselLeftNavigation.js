import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./reviews.module.css";
import { ReactComponent as LeftArrow } from "../../assets/left.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]);
  return (
    <div
      className={styles.leftNavigation}
      style={{
        backgroundColor: isBeginning
          ? "var(--color-white)"
          : "var(--color-primary)",
      }}
      onClick={() => swiper.slidePrev()}
    >
      <LeftArrow  />
    </div>
  );
};

export default CarouselLeftNavigation;
