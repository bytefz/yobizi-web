import Head from "next/head";

import { AboutUs, Benefits, Footer, Hero, NavBar } from "@/components";

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
        <div className="m-10" />
        <AboutUs />
        <div className="m-10" />
        <Benefits />
        <div className="m-10" />
        <Footer />
      </main>
    </>
  );
}
