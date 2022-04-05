import { useState } from "react";
import { DisplayCounter } from "../DisplayCounter"
import styles from './Counter.module.css'

const Counter = () => {
  const [number, setNumber] = useState(0);

  const addition1 = () => {
    setNumber(number + 1);
  }

  const subtraction1 = () => {
    setNumber(number - 1);
  }
  return (
    <div className={styles.counter}>
      <h1>Contador</h1>
      <DisplayCounter number={number}/>
      <div className={styles.containerButtons}>
        <button onClick={subtraction1} className={styles.buttons}>- 1</button>
        <button onClick={addition1} className={styles.buttons}>+ 1</button>
      </div>
    </div>
  )
}

export default Counter;
