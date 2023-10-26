import React from "react";
import styles from "./practices.module.css";

const PracticeImg = ({ image, title }) => {
  return (
    <div className={styles.practiceimg}>
      <img src={image} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default PracticeImg;
