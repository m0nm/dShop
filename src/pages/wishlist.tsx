import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";
import { dehydrate, QueryClient } from "react-query";

import { Container } from "@/components/Shared";
import { Icon } from "ts-react-feather-icons";
import {
  getWishlist,
  useGetWishlist,
  WishlistTable,
} from "@/features/wishlist";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", { req, res });

  if (!token) {
    return { redirect: { destination: "/account", permanent: false } };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["wishlist"], () =>
    getWishlist(token as string)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const WishlistPage = () => {
  const { data } = useGetWishlist();

  return (
    <Container
      flexCol
      css={{
        "@lg": { marginTop: "10vh" },
      }}
    >
      <Head>
        <title>dShop | My Wishlist</title>
      </Head>

      <h1 style={{ marginBottom: "3rem" }}>My Wishlist</h1>

      {!data?.length ? (
        <>
          <Icon name="heart" size={123} />
          <p style={{ marginTop: 28, marginBottom: "10vh" }}>
            You don&apos;t have any wishlist currently
          </p>
        </>
      ) : (
        <WishlistTable />
      )}
    </Container>
  );
};

export default WishlistPage;
