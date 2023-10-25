import { Typography, Chip } from "@mui/material";
import React from "react";
import styles from "./reasons.module.css";
import icon from "../../assets/gifticon.svg";

const Card = ({ title, bgcolor = "#111111", content }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgcolor }}>
      <div className={styles.cardimg}>
        <img src={icon} alt={title} />
      </div>

      <Typography variant={"h6"}>{title}</Typography>

      <p className={styles.content}>{content}</p>

      <button className={styles.cardbtn}>Read more</button>
    </div>
  );
};

export default Card;
