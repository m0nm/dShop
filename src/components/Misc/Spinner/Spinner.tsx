import React from "react";
import styles from "./spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.ldsGrid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
