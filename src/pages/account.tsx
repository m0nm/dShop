import { GetServerSideProps } from "next";
import React from "react";
import { dehydrate, QueryClient } from "react-query";
import { getCookie } from "cookies-next";
import { getAccount } from "@/features/account";

import { Breadcrumb, Container } from "@/components/Shared";
import { AccountTabs } from "@/features/account";
import { AuthTabs } from "@/features/auth";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", { req, res });

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["account"], () =>
    getAccount(token as string)
  );

  return {
    props: {
      token: token ?? null,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const AccountPage = ({ token }: { token: string }) => {
  return (
    <Container flexCol>
      <Breadcrumb content="My Account" />

      <h1 style={{ textAlign: "center", margin: 0 }}>My Account</h1>

      {token ? <AccountTabs /> : <AuthTabs />}
    </Container>
  );
};

export default AccountPage;
