import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { getCookie } from "cookies-next";
import { EmptyCart, getCart, useGetCart } from "@/features/cart";
import { CheckoutInfo, OrderReview } from "@/features/orders";
import { Container } from "@/components/Shared";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", { req, res });

  if (!token) {
    return { redirect: { destination: "/account", permanent: false } };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["cart"], () => getCart(token as string));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const CheckoutPage = () => {
  const { data } = useGetCart();

  if (!data?.length) return <EmptyCart />;

  return (
    <Container
      flexCol
      css={{
        marginTop: "4rem",
        alignItems: "flex-start",
        justifyContent: "space-between",
        "@lg": { flexDirection: "row" },
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>dShop | Checkout</title>
      </Head>

      <CheckoutInfo />
      <OrderReview />
    </Container>
  );
};

export default CheckoutPage;
