import Head from "next/head";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import Publicity from "../Components/Publicity";
import ProductPoster from '../Components/ProductPoster';
import Brands from '../Components/Brands';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-900 ">
      <Head>
        <title>Loom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Carousel/>
      <Publicity/>
      <ProductPoster/>
      <Brands/>
      <Footer />
    </div>
  );
}
