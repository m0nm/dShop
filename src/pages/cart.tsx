import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { getCookie } from "cookies-next";

import { Container, Flex } from "@/components/Shared";
import {
  CartCheckout,
  CartTable,
  EmptyCart,
  getCart,
  useGetCart,
} from "@/features/cart";

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

const CartPage = () => {
  const { data } = useGetCart();

  return (
    <Container
      flexCol
      css={{
        "@lg": { marginTop: "15vh" },
        alignItems: "flex-start",
      }}
    >
      <Head>
        <title>dShop | My Cart</title>
      </Head>

      <h1 style={{ margin: "auto", marginBottom: "3rem" }}>My Cart</h1>

      {!data?.length ? (
        <EmptyCart />
      ) : (
        <Flex
          flexCol
          css={{
            gap: "2rem",
            margin: "auto",
            width: "100%",
            "@lg": { flexDirection: "row" },
          }}
        >
          <CartTable />
          <CartCheckout />
        </Flex>
      )}
    </Container>
  );
};

export default CartPage;
