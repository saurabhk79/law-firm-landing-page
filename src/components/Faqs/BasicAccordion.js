import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";

import styles from "./faqs.module.css";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<PlusIcon />}
          className={styles.accordionHeader}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Do I need a personal injury report?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<PlusIcon />}
          className={styles.accordionHeader}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<PlusIcon />}
          className={styles.accordionHeader}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What should I do right after car accidect</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<PlusIcon />}
          className={styles.accordionHeader}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
