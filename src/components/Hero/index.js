import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { ReactComponent as HeroImage } from "../../assets/heroimg.svg";
import HeroInput from "./HeroInput";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={10}
        className={styles.hero}
      >
        <Box>
          <Typography variant={"h3"}>You don&apos;t have to</Typography>
          <Typography variant={"h3"} sx={{ fontWeight: 600 }}>
            Fight them Alone.
          </Typography>

          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <HeroInput />
        </Box>
        <HeroImage />
      </Stack>
    </div>
  );
};

export default Hero;
