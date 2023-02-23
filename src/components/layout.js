import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
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