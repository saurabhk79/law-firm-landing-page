import React from "react";
import styles from "./hero.module.css";
import { ReactComponent as MessageIcon } from "../../assets/messageicon.svg";

const HeroInput = () => {
  return (
    <form className={styles.form}>
      <span>
        <MessageIcon />
      </span>
      <input
        type={"text"}
        placeholder={"Enter your email address"}
        className={styles.formInput}
      />
      <button className={styles.formButton}>Let&apos;s talk</button>
    </form>
  );
};

export default HeroInput;
