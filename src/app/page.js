import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NewArrivals from '@/views/newArrivals/NewArrivals'
import ShopCategory from '@/views/shopcategory/Shopcategory'
import CommonCarousel from '@/(components)/commonCarousel/CommonCarousel'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <CommonCarousel />
      <ShopCategory />
      <NewArrivals />
    </main>
  )
}
