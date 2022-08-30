import Router from "next/router";
import React, { useRef } from "react";
import * as Form from "./auth.styles";

import { SubmitHandler, useForm } from "react-hook-form";
import { formRules } from "../utils/auth_form_rules";
import { IUser } from "../api";
import { useAuthModalStore, useLogin } from "..";
import { SocialAuth } from "./SocialAuth";
import { Icon } from "ts-react-feather-icons";
import { Flex } from "@/components/Shared";

export const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IUser>();

  // get value of "remember_me" checkbox
  const checkboxRef = useRef<HTMLButtonElement>(null);
  const remember_me =
    checkboxRef?.current?.getAttribute("data-state") === "checked";

  const { handleLogin, isLoading } = useLogin(remember_me);

  const onSubmit: SubmitHandler<IUser> = (data) => {
    handleLogin(data);
  };

  const { handleDisplay } = useAuthModalStore();

  return (
    <Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Title>Login</Form.Title>

      <SocialAuth />

      <Form.DividerText>Or continue with</Form.DividerText>

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

      <Flex
        css={{
          marginTop: 12,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex css={{ alignItems: "center" }}>
          <Form.Checkbox
            {...register("remember_me")}
            css={{ width: "fit-content" }}
            defaultChecked
            ref={checkboxRef}
            id="remember_me"
          >
            <Form.CheckboxIndicator>
              <Icon name="check" size={14} />
            </Form.CheckboxIndicator>
          </Form.Checkbox>
          <Form.Label
            css={{ fontSize: 12, paddingLeft: 4 }}
            htmlFor="remember_me"
          >
            remember me
          </Form.Label>
        </Flex>

        <Form.ForgotPasswordButton
          type="button"
          onClick={() => handleDisplay("forgot-password")}
        >
          forgot your password?
        </Form.ForgotPasswordButton>
      </Flex>

      <Form.SubmitButton disabled={isLoading}>LOGIN</Form.SubmitButton>
    </Form.Form>
  );
};
