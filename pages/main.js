import Head from "next/head";
import Layout from "../components/Main/Layout";

export default function main() {
    return (
        <div>
            <Head>
                <title>Realtime Chat App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout />
        </div>
    );
}
