import { GetServerSideProps } from "next";
import React from "react";
import { getCookie } from "cookies-next";
import {
  Aside,
  CartTable,
  EmptyCart,
  getCart,
  useGetCart,
} from "@/features/cart";
import { Container } from "@/components/Shared";
import { dehydrate, QueryClient } from "react-query";

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
        gap: "3rem",
        "@lg": { flexDirection: "row", marginTop: "20vh" },
        alignItems: "flex-start",
      }}
    >
      {!data?.length ? (
        <EmptyCart />
      ) : (
        <>
          <CartTable />
          <Aside />
        </>
      )}
    </Container>
  );
};

export default CartPage;
