import Head from "next/head";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import Publicity from "../Components/Publicity";
import ProductPoster from '../Components/ProductPoster';

export default function Home() {
  return (
    <div className="bg-blue ">
      <Head>
        <title>Loom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Carousel/>
      <Publicity/>
      <ProductPoster/>
    </div>
  );
}
