import Head from "next/head";
import React from "react";
import { Breadcrumb, Container } from "@/components/Shared";
import { ResetPassword } from "@/features/auth";

const ResetPasswordPage = () => {
  return (
    <Container
      flexCol
      css={{
        justifyContent: "center",
        paddingBottom: "4rem",
      }}
    >
      <Head>
        <title>dShop | Reset Your Password</title>
      </Head>

      <Breadcrumb content="reset password" />

      <ResetPassword />
    </Container>
  );
};

export default ResetPasswordPage;
