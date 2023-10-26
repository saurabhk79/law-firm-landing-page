import React from "react";
import { Typography } from "@mui/material";

import PracticeImg from "./PracticeImg";
import styles from "./practices.module.css";

import businesslaw2 from "../../assets/businesslaw (2).png";
import businesslaw from "../../assets/businesslaw.png";
import elderabuse from "../../assets/elderabuse.png";
import landlordiputes from "../../assets/landlordisputes.png";
import partnershiplaw from "../../assets/partnershiplaw.png";
import realestatelaw from "../../assets/realestatelaw.png";

const Practices = () => {
  return (
    <div className={styles.practices}>
      <Typography variant={"h4"}>Areas of Practices</Typography>
      <div className={styles.box}>
        <PracticeImg title={"BUSINESS LAW"} image={businesslaw} />
        <PracticeImg title={"PARTNERSHIP LAW"} image={partnershiplaw} />
      </div>
      <div className={styles.box}>
        <PracticeImg title={"REAL ESTATE LAW"} image={realestatelaw} />
        <PracticeImg title={"BUSINESS LAW"} image={businesslaw2} />
      </div>
      <div className={styles.box}>
        <PracticeImg title={"LANDLORD DISPUTES"} image={landlordiputes} />
        <PracticeImg title={"ELDER ABUSE"} image={elderabuse} />
      </div>
    </div>
  );
};

export default Practices;
