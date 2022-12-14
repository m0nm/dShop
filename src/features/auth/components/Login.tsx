import Link from "next/link";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { formRules } from "../utils/auth-form-rules";
import { IUser } from "../api";
import { useAuthModalStore, useLogin } from "..";
import { SocialAuth } from "./social-auth";
import { Icon } from "ts-react-feather-icons";
import { Flex, Input, InputFeedback } from "@/components/Shared";
import * as Form from "./auth.styles";

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

  const { handleOpen } = useAuthModalStore();

  return (
    <>
      <SocialAuth />

      <Form.DividerText>Or continue with</Form.DividerText>

      <Form.Form onSubmit={handleSubmit(onSubmit)}>
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
              ref={checkboxRef}
              id="checkbox"
            >
              <Form.CheckboxIndicator>
                <Icon name="check" size={8} />
              </Form.CheckboxIndicator>
            </Form.Checkbox>
            <Form.Label
              css={{ fontSize: 12, paddingLeft: 4 }}
              htmlFor="checkbox"
            >
              remember me
            </Form.Label>
          </Flex>

          <Link href="/forgot-password">
            <Form.ForgotPasswordButton
              onClick={() => handleOpen(false)}
              type="button"
              tabIndex={-1}
            >
              forgot your password?
            </Form.ForgotPasswordButton>
          </Link>
        </Flex>

        <Form.SubmitButton disabled={isLoading}>
          {isLoading ? "Loggin in..." : "LOGIN"}
        </Form.SubmitButton>
      </Form.Form>
    </>
  );
};
