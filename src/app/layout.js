
import TopBar from '@/(components)/TopBar/TopBar';
import './globals.css'

import Footer from '@/(components)/footer/Footer';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <title>Gadget ShopBD</title>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <TopBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
