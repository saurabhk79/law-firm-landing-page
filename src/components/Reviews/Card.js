import { Typography } from "@mui/material";
import React from "react";
import styles from "./reviews.module.css";

const Card = ({ name, bgcolor = "#111111", position, image }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgcolor }}>
      <div className={styles.cardimg}>
        <img src={image} alt={name} />
      </div>

      <Typography variant={"h6"}>{name}</Typography>
      <small>{position}</small>

      <p className={styles.content}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

export default Card;
