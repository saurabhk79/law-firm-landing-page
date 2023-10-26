import React from "react";
import { Typography } from "@mui/material";

import styles from "./faqs.module.css";
import BasicAccordion from "./BasicAccordion";

const Faqs = () => {
  return (
    <div className={styles.faqs}>
      <div>
        <Typography variant={"h4"}>FAQ</Typography>
        <p className={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>

      <BasicAccordion />
    </div>
  );
};

export default Faqs;
