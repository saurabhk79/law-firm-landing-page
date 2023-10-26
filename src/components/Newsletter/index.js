import React from "react";
import { Typography } from "@mui/material";
import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <Typography variant={"h4"}>Subscribe Our Newsletter</Typography>
      <form className={styles.form}>
        <input type={"text"} placeholder={"Name"} />
        <input type={"text"} placeholder={"Enter your Email"} />
        <button className={styles.formbtn}>Send</button>
      </form>
    </div>
  );
};

export default Newsletter;
