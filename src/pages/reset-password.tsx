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
      <Breadcrumb content="reset password" />

      <ResetPassword />
    </Container>
  );
};

export default ResetPasswordPage;