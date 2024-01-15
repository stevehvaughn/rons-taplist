import styles from './home.module.scss'
import Beerlist from './Beerlist/beerlist';
import BeerForm from './BeerForm/BeerForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <Beerlist />
      <BeerForm />
    </main>
  )
}
