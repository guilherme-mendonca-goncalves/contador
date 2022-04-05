import styles from '../styles/Home.module.css'
import { Counter } from './components/counter'

export default function Home() {
  return (
    <div className={styles.main}>
      <Counter />
    </div>
  )
}
