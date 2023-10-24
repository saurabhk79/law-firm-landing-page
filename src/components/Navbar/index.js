import React from "react";
import { Stack } from "@mui/material";
import NavButton from "../NavButton";

import styles from "./navbar.module.css";
import Brand from "../Brand";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={90}
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
  );
};

export default Navbar;
