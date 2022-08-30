import React from "react";

import * as Form from "./auth.styles";
import { SocialAuth } from "./SocialAuth";

import { SubmitHandler, useForm } from "react-hook-form";
import { formRules } from "../utils/auth_form_rules";
import { INewUser } from "../api";
import { useRegister } from "../hooks/useRegister";

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
      <Form.Title>Register</Form.Title>

      <SocialAuth />

      <Form.DividerText>Or continue with</Form.DividerText>

      <Form.InputField>
        <Form.Label htmlFor="name">Name*</Form.Label>
        <Form.Input
          {...register("name", formRules().name)}
          invalid={errors.name && true}
          id="name"
          type="text"
          placeholder="type your name..."
        />

        <Form.InputFeedback>{errors.name?.message}</Form.InputFeedback>
      </Form.InputField>

      <Form.InputField>
        <Form.Label htmlFor="email">Email*</Form.Label>
        <Form.Input
          {...register("email", formRules().email)}
          invalid={errors.email && true}
          id="email"
          type="email"
          placeholder="type your email..."
        />
        <Form.InputFeedback>{errors.email?.message}</Form.InputFeedback>
      </Form.InputField>

      <Form.InputField>
        <Form.Label htmlFor="password">Password*</Form.Label>
        <Form.Input
          {...register("password", formRules().password)}
          invalid={errors.password && true}
          id="password"
          type="password"
          placeholder="type your password..."
        />
        <Form.InputFeedback>{errors.password?.message}</Form.InputFeedback>
      </Form.InputField>

      <Form.InputField>
        <Form.Label htmlFor="passwordConfirm">Confirm Password*</Form.Label>
        <Form.Input
          {...register(
            "password_confirmation",
            formRules(getValues("password")).passwordConfirm
          )}
          invalid={errors.password_confirmation && true}
          id="passwordConfirm"
          type="password"
          placeholder="confirm your password..."
        />
        <Form.InputFeedback>
          {errors.password_confirmation?.message}
        </Form.InputFeedback>
      </Form.InputField>

      <Form.SubmitButton disabled={isLoading}>Register</Form.SubmitButton>
    </Form.Form>
  );
};
