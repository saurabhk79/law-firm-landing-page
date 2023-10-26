import React from "react";
import { Stack } from "@mui/material";
import NavButton from "../NavButton";

import styles from "./navbar.module.css";
import Brand from "../Brand";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={90}
        className={styles.navbar}
      >
        <Brand />

        <ul className={styles.menu}>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About us</li>
        </ul>

        <NavButton>Contact now</NavButton>
      </Stack>
    </div>
  );
};

export default Navbar;
