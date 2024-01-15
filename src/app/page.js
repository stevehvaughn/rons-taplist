import styles from './home.module.scss'
import Beerlist from './Beerlist/beerlist';

export default function Home() {
  return (
    <main className={styles.main}>
      <Beerlist />
    </main>
  )
}
