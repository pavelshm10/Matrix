import React, { useState } from "react";
import styles from "./numbers.module.scss";
import {
  action_value,
  firstNum,
  num1_value,
  num2_value,
  secondNum,
} from "../../slices/equationSlice";
import { useSelector, useDispatch } from "react-redux";

function Numbers() {
  const action = useSelector(action_value);
  const num1 = useSelector(num1_value);
  const dispatch = useDispatch();

  return (
    <div className={styles.grid_container}>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(1) || 0))
            : dispatch(firstNum(Number(1) || 0));
        }}
        className={styles.grid_item}
      >
        1
      </div>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(2) || 0))
            : dispatch(firstNum(Number(2) || 0));
        }}
        className={styles.grid_item}
      >
        2
      </div>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(3) || 0))
            : dispatch(firstNum(Number(3) || 0));
        }}
        className={styles.grid_item}
      >
        3
      </div>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(4) || 0))
            : dispatch(firstNum(Number(4) || 0));
        }}
        className={styles.grid_item}
      >
        4
      </div>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(5) || 0))
            : dispatch(firstNum(Number(5) || 0));
        }}
        className={styles.grid_item}
      >
        5
      </div>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(6) || 0))
            : dispatch(firstNum(Number(6) || 0));
        }}
        className={styles.grid_item}
      >
        6
      </div>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(7) || 0))
            : dispatch(firstNum(Number(7) || 0));
        }}
        className={styles.grid_item}
      >
        7
      </div>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(8) || 0))
            : dispatch(firstNum(Number(8) || 0));
        }}
        className={styles.grid_item}
      >
        8
      </div>
      <div
        onClick={() => {
          num1 != 0 && action != ""
            ? dispatch(secondNum(Number(9) || 0))
            : dispatch(firstNum(Number(9) || 0));
        }}
        className={styles.grid_item}
      >
        9
      </div>
    </div>
  );
}

export default Numbers;
