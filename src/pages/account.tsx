import { GetServerSideProps } from "next";
import React from "react";
import { getCookie } from "cookies-next";
import { Breadcrumb, Container } from "@/components/Shared";
import { AccountTabs } from "@/features/account";
import { AuthTabs } from "@/features/auth";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", { req, res });

  return { props: { token: token ?? null } };
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
