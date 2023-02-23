import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import ShopCard from '@/(components)/card/ShopCard'
import NewArrivals from '@/views/newArrivals/NewArrivals'
import Category from '@/views/category/Category'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Category />
      <NewArrivals />
    </main>
  )
}
