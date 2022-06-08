import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Navbar.module.css'


export default function About(){
    return (
        <>
        <Head>
            <title>About</title>
            <meta name="keywords" content="roupas"></meta>
            <meta name="description" content="encontre a melhor roupa"></meta>
        </Head>
            <h1>Página de About</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
        </>
    )
}