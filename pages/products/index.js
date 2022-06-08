import Link from "next/link"
import Head from 'next/head'


export default function Products(){
    return (
        <>
        <Head>
            <title>Products</title>
            <meta name="keywords" content="roupas"></meta>
            <meta name="description" content="encontre a melhor roupa"></meta>
        </Head>
            <h1>Página de produtos</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
        </>
    )
}