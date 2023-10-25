import { Card, Typography } from "@mui/material";
import React from "react";

import styles from "./reasons.module.css";

const Reasons = () => {
  return (
    <div className={styles.reasons}>
      <Typography variant={"h4"}>Why choose us?</Typography>
      <div className={styles.list}>
        <Card></Card>
      </div>
    </div>
  );
};

export default Reasons;
