import { Typography } from "@mui/material";
import React from "react";

import styles from "./team.module.css";

import { members } from "../../constants";
import Profile from "./Profile";

const Team = () => {
  return (
    <div className={styles.team}>
      <Typography variant={"h4"}>Our team</Typography>
      <div className={styles.profileList}>
        {members.map((ele, idx) => (
          <Profile data={ele} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Team;
