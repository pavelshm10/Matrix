import React from "react";
import styles from "./App.module.scss";
import Actions from "./compoents/actionts/actions";
import Numbers from "./compoents/numbers/numbers";
import Result from "./compoents/result/result";
function App() {
  return (
    <div className={styles.calculator}>
      <Result />
      <div className={styles.body_calculator}>
        <Numbers />
        <Actions />
      </div>
    </div>
  );
}

export default App;
