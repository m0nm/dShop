import React from "react";

import * as Form from "./auth.styles";
import { SocialAuth } from "./social-auth";

import { SubmitHandler, useForm } from "react-hook-form";
import { formRules } from "../utils/auth-form-rules";
import { INewUser } from "../api";
import { useRegister } from "../hooks/useRegister";
import { Input, InputFeedback } from "@/components/Shared";

export const Register = () => {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    register,
  } = useForm<INewUser>();

  const { handleRegister, isLoading } = useRegister();

  const onSubmit: SubmitHandler<INewUser> = (data) => {
    handleRegister(data);
  };

  return (
    <Form.Form onSubmit={handleSubmit(onSubmit)}>
      <SocialAuth />

      <Form.DividerText>Or continue with</Form.DividerText>

      <Form.InputField>
        <Form.Label htmlFor="name">Name*</Form.Label>
        <Input
          {...register("name", formRules().name)}
          invalid={errors.name && true}
          id="name"
          type="text"
          placeholder="type your name..."
        />

        <InputFeedback>{errors.name?.message}</InputFeedback>
      </Form.InputField>

      <Form.InputField>
        <Form.Label htmlFor="email">Email*</Form.Label>
        <Input
          {...register("email", formRules().email)}
          invalid={errors.email && true}
          id="email"
          type="email"
          placeholder="type your email..."
        />
        <InputFeedback>{errors.email?.message}</InputFeedback>
      </Form.InputField>

      <Form.InputField>
        <Form.Label htmlFor="password">Password*</Form.Label>
        <Input
          {...register("password", formRules().password)}
          invalid={errors.password && true}
          id="password"
          type="password"
          placeholder="type your password..."
        />
        <InputFeedback>{errors.password?.message}</InputFeedback>
      </Form.InputField>

      <Form.InputField>
        <Form.Label htmlFor="passwordConfirm">Confirm Password*</Form.Label>
        <Input
          {...register(
            "password_confirmation",
            formRules(getValues("password")).passwordConfirm
          )}
          invalid={errors.password_confirmation && true}
          id="passwordConfirm"
          type="password"
          placeholder="confirm your password..."
        />
        <InputFeedback>{errors.password_confirmation?.message}</InputFeedback>
      </Form.InputField>

      <Form.SubmitButton disabled={isLoading}>Register</Form.SubmitButton>
    </Form.Form>
  );
};
