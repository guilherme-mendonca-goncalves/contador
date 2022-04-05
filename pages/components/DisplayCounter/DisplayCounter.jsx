import styles from './DisplayCounter.module.css'

const CounterDisplay = (props) => {

  return (
    <div className={styles.displayCounter}>
      {props.number}
    </div>
  )
}

export default CounterDisplay;
