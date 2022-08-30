import React, { FormEvent, useRef } from "react";

import { forgotPassword } from "../api";
import { useMutation } from "react-query";

import * as Form from "./auth.styles";
import { Alert } from "@/components/Shared";

export const ForgotPassword = () => {
  const mutation = useMutation((email: string) => forgotPassword(email));

  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(emailRef.current?.value as string);
  };

  return (
    <Form.Form onSubmit={handleSubmit}>
      <Form.Title>Forgot Your Password?</Form.Title>

      <p style={{ textAlign: "center", marginBottom: 12, fontSize: 16 }}>
        Don&apos;t worry, Enter your email
      </p>

      {mutation.isSuccess && (
        <Alert variant="info">
          <p style={{ lineHeight: "1.2" }}>An email has been sent.</p>
          <small>(You may have to check your spam folder.)</small>
        </Alert>
      )}

      <Form.InputField>
        <Form.Label htmlFor="email">Email*</Form.Label>

        <Form.Input
          ref={emailRef}
          required
          type="email"
          id="email"
          className="mb-3"
        />
      </Form.InputField>

      <Form.SubmitButton disabled={mutation.isLoading}>
        Send Email
      </Form.SubmitButton>
    </Form.Form>
  );
};
