import { Typography } from "@mui/material";
import React from "react";
import Card from "./Card";

import styles from "./reasons.module.css";

const Reasons = () => {
  return (
    <div className={styles.reasons}>
      <Typography variant={"h4"}>Why choose us?</Typography>
      <div className={styles.list}>
        <Card
          title={"98% Success Rate"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
        />
        <Card
          title={"100% Success Rate"}
          bgcolor={"#2E2E2E"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
        />
        <Card
          title={"100% Success Rate"}
          content={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
        />
      </div>
    </div>
  );
};

export default Reasons;
