import { Hero, NavBar } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Yobizi</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}
