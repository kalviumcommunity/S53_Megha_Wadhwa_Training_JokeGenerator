import Head from "next/head";
import JokesGenerator from "./Components/JokesGenerator";

export default function Home() {
  return (
    <>
      <Head>
        <title>JokesGenerator</title>
      </Head>
      <JokesGenerator />
    </>
  )
}
