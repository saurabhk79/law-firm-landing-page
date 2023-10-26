import React from "react";
import styles from "./footer.module.css";
import Brand from "../Brand";

import { ReactComponent as Pinterest } from "../../assets/pinterest.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <Brand />
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About us</li>
        </ul>
        <div className={styles.icons}>
          <Instagram />
          <Facebook />
          <Twitter />
          <Pinterest />
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2020 Acme. All right reserved.</p>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
