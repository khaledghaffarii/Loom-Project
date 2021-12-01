import Head from "next/head";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div className="bg-blue h-screen ">
      <Head>
        <title>Loom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Carousel />
    </div>
  );
}
