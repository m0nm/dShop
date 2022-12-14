import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Banner, getBanners, IBanner } from "@/features/banner";
import { HomeProducts } from "@/features/products";

export const getServerSideProps: GetServerSideProps = async () => {
  const banners = await getBanners();

  return { props: { banners } };
};

type IProps = {
  banners: IBanner[];
};

const Home = ({ banners }: IProps) => {
  return (
    <div>
      <Head>
        <title>dShop | Happy Customer&apos;s Place </title>
        <meta name="description" content="An ecommerce shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner banners={banners} />

      <HomeProducts />
    </div>
  );
};

export default Home;
