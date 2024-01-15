import styles from './home.module.scss'
import Beerlist from './beerlist';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Rons Taplist</h1>
      <Beerlist />
    </main>
  )
}
