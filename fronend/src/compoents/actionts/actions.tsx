import React, { useState } from "react";
import styles from "./actions.module.scss";
import {actions} from '../../types/action.enum'
import { action_click } from "../../slices/equationSlice";
import { useDispatch } from "react-redux";

function Actions() {
    const dispatch = useDispatch();
    return (
    <div className={styles.actions}>
      <div className={styles.action}  onClick={() => dispatch(action_click(String(actions.plus) || ''))}>
        <b>+</b>
      </div>
      <div className={styles.action}  onClick={() => dispatch(action_click(String(actions.subtract) || ''))}>
        <b>-</b>
      </div>
      <div className={styles.action}  onClick={() => dispatch(action_click(String(actions.multiply) || ''))}>
        <b>*</b>
      </div>
      <div className={styles.action}  onClick={() => dispatch(action_click(String(actions.divide) || ''))}>
        <b>/</b>
      </div>
    </div>
  );
}

export default Actions;

