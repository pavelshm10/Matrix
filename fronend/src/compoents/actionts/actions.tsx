import React, { useState } from "react";
import styles from "./actions.module.scss";
import {actions} from '../../types/action.enum'
function Actions() {
    const [action, setAction] = useState('');
    return (
    <div className={styles.actions}>
      <div className={styles.action} onClick={() => setAction(actions.plus)}>
        <b>+</b>
      </div>
      <div className={styles.action} onClick={() => setAction(actions.minus)}>
        <b>-</b>
      </div>
      <div className={styles.action} onClick={() => setAction(actions.multiply)}>
        <b>*</b>
      </div>
      <div className={styles.action} onClick={() => setAction(actions.divide)}>
        <b>/</b>
      </div>
    </div>
  );
}

export default Actions;
