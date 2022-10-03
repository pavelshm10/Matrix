import React, {
  HtmlHTMLAttributes,
  useEffect,
  useInsertionEffect,
  useState,
} from "react";
import styles from "./App.module.scss";
import Actions from "./compoents/actionts/actions";
import Numbers from "./compoents/numbers/numbers";
import Result from "./compoents/result/result";
import {
  action_value,
  firstNum,
  num1_value,
  num2_value,
  secondNum,
} from "./slices/equationSlice";
import { useSelector } from "react-redux";
import { Equation } from "./types/equation.interface";
const App = () => {
  const init_equation: Equation = {
    num1: 0,
    num2: 0,
    action: "",
  };
  const action = useSelector(action_value);
  const num1 = useSelector(num1_value);
  const num2 = useSelector(num2_value);
  const [num1state, setNum1state] = useState(num1);
  const [num2state, setNum2state] = useState(num2);
  const [actionstate, setActionstate] = useState(action);
  // useEffect(() => {
  if (num1 && num2 && action) {
  
  const url = `${action}?num1=${num1}&num2=${num2}`;
  console.log("num1 ", num1);
  console.log("num2 ", num2);
  console.log("url ", url);
   
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  };
  fetchData();
  }
  
  // }, []);
  return (
    <div className={styles.calculator}>
      <Result />
      <div className={styles.body_calculator}>
        <Numbers />
        <Actions />
      </div>
    </div>
  );
};

export default App;
