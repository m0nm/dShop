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
      <Breadcrumb content="Forgot password" />

      <ForgotPassword />
    </Container>
  );
};

export default ForgotPasswordPage;
