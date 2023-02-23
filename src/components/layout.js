import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Aspiratot Firma de Curatare 24H</title>
                <meta name="description" content="Aspiratot Firma de Curatare 24H"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="min-h-screen flex flex-col">
                {children}
            </main>
            <Footer/>
        </>
    )
}