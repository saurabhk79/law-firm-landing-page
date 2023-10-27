import React from "react";
import { Typography } from "@mui/material";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import styles from "./reviews.module.css";

const Topbar = () => {
  return (
    <div>
      <Typography variant={"h4"}>
        What says our <br /> happy Clients
      </Typography>
      <div className={styles.btns}>
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
      </div>
    </div>
  );
};

export default Topbar;
