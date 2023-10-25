import { Typography } from "@mui/material";
import React from "react";

import styles from "./intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <Typography variant={"h4"}>
        Let&apos;s Introduce <br /> Ourself
      </Typography>
      <div className={styles.introline}>
        <Typography variant={"h5"}>Criminal Lawyer</Typography>
        <p className={styles.para}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;
