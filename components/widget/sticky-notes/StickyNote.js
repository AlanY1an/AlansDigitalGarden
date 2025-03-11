import React from "react";
import styles from "./StickyNote.module.css";
import { Englebert } from "next/font/google";

const englebert = Englebert({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const StickyNote = ({ color, title, children }) => {
  return (
    <aside
      className={`${styles.noteWrap} ${styles[color]} ${englebert.className}`}
    >
      <div className={styles.title}>{title}</div>
      <p>{children}</p>
    </aside>
  );
};

export default StickyNote;
