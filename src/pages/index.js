import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductFeed from "../components/product/ProductFeed";

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const url = "https://fakestoreapi.com/products";
  const products = await fetch(url).then((res) => res.json());
  return {
    props: {
      products,
      session,
    },
  };
}
