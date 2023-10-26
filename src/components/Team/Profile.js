import { Typography } from "@mui/material";
import React from "react";
import styles from "./team.module.css";

const Profile = ({ data }) => {
  const { image, nm, cases } = data;

  return (
    <div className={styles.profile}>
      <img src={image} alt={nm} />
      <div>
        <Typography variant={"h6"}>{nm}</Typography>
        <p className={styles.cases}>{cases} cases</p>
      </div>
    </div>
  );
};

export default Profile;
