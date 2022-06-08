import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import MainContainer from '../components/MainContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="roupas"></meta>
        <meta name="description" content="encontre a melhor roupa"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Home Next JS!</h1>
        <Image src="/images/city.jpg" width="200px" height="200px" alt="imagem de cidade a noite" />
      </div>
    </>   
  )
}
