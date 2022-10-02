import React from "react";
import styles from "./numbers.module.scss";

function Numbers() {
  return (
    <div className={styles.grid_container}>
      <div className={styles.grid_item}>1</div>
      <div className={styles.grid_item}>2</div>
      <div className={styles.grid_item}>3</div>
      <div className={styles.grid_item}>4</div>
      <div className={styles.grid_item}>5</div>
      <div className={styles.grid_item}>6</div>
      <div className={styles.grid_item}>7</div>
      <div className={styles.grid_item}>8</div>
      <div className={styles.grid_item}>9</div>
    </div>
  );
}

export default Numbers;
