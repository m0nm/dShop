import { GetServerSideProps } from "next";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { getCookie } from "cookies-next";

import { Container, Flex } from "@/components/Shared";
import {
  Aside,
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
      <h1 style={{ margin: "auto", marginBottom: "3rem" }}>My Cart</h1>

      {!data?.length ? (
        <EmptyCart />
      ) : (
        <Flex css={{ gap: "3rem" }}>
          <CartTable />
          <Aside />
        </Flex>
      )}
    </Container>
  );
};

export default CartPage;
