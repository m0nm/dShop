import { useRouter } from "next/router";
import React from "react";

import { useMutation } from "react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { IResetPassword, resetPassword } from "../api";
import { formRules } from "../utils/auth_form_rules";

import * as Form from "./auth.styles";
import { Alert, Input, InputFeedback } from "@/components/Shared";
import { useAuthModalStore } from "..";

export const ResetPassword = () => {
  const router = useRouter();
  const { handleOpen } = useAuthModalStore();

  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = useForm<IResetPassword>();

  const mutation = useMutation((data: IResetPassword) => resetPassword(data), {
    onSuccess: () => {
      setTimeout(() => {
        router.push("/");
        handleOpen(false);
      }, 1000);
    },
  });

  const onSubmit: SubmitHandler<IResetPassword> = () => {
    const data = {
      token: router.query?.token,
      password: getValues("password"),
      password_confirmation: getValues("password_confirmation"),
    };

    mutation.mutate(data);
  };

  return (
    <Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Title>Reset Your Password</Form.Title>

      {mutation.isSuccess && (
        <Alert variant="success">Password reset successfully</Alert>
      )}

      <Form.InputField>
        <Form.Label htmlFor="password">New Password*</Form.Label>

        <Input
          {...register("password", formRules().password)}
          type="password"
          id="password"
          placeholder="Enter your new password..."
          invalid={errors.password && true}
        />

        <InputFeedback>{errors.password?.message}</InputFeedback>
      </Form.InputField>

      <Form.InputField>
        <Form.Label htmlFor="password">Confirm Password*</Form.Label>

        <Input
          {...register(
            "password_confirmation",
            formRules(getValues("password")).passwordConfirm
          )}
          type="password"
          id="password"
          placeholder="Confirm your password..."
          invalid={errors.password_confirmation && true}
        />

        <InputFeedback>{errors.password_confirmation?.message}</InputFeedback>
      </Form.InputField>

      <Form.SubmitButton disabled={mutation.isLoading}>
        Reset Password
      </Form.SubmitButton>
    </Form.Form>
  );
};
