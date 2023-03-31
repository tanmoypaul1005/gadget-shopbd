import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NewArrivals from '@/views/newArrivals/NewArrivals'
import ShopCategory from '@/views/shopcategory/ShopCategory'
import { iBanner } from '@/Utility/AllImageImport'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
      src={iBanner}
      alt="Picture of the author"
      className='w-full h-[380px] p-[20px] rounded-[10px]'
    />
      <ShopCategory />
      <NewArrivals />
    </main>
  )
}
