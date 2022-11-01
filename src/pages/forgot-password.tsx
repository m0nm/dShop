import Head from "next/head";
import React from "react";
import { ForgotPassword } from "@/features/auth";
import { Breadcrumb, Container } from "@/components/Shared";

const ForgotPasswordPage = () => {
  return (
    <Container
      flexCol
      css={{
        justifyContent: "center",
        paddingBottom: "4rem",
      }}
    >
      <Head>
        <title>dShop | Forgot your password?</title>
      </Head>

      <Breadcrumb content="Forgot password" />

      <ForgotPassword />
    </Container>
  );
};

export default ForgotPasswordPage;
