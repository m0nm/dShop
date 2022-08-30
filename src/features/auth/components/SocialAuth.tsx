import Image from "next/image";
import React from "react";
import * as Form from "./auth.styles";

import { useMutation } from "react-query";
import { loginSocial } from "../api";

import googleIcon from "@/../public/icons/google.svg";
import facebookIcon from "@/../public/icons/facebook.svg";

export const SocialAuth = () => {
  const { mutate } = useMutation(
    (provider: "facebook" | "google") => loginSocial(provider),
    {
      onSuccess: (data) => {
        if (typeof window !== undefined) window.open(data.data);
      },
    }
  );

  return (
    <>
      <Form.SocialButton
        onClick={() => mutate("google")}
        className="ml"
        type="button"
        variant="google"
      >
        <Image
          src={googleIcon}
          width={12}
          height={12}
          alt="continue with google"
        />
        continue with Google
      </Form.SocialButton>

      <Form.SocialButton
        onClick={() => mutate("facebook")}
        type="button"
        variant="facebook"
      >
        <Image
          src={facebookIcon}
          width={16}
          height={16}
          alt="continue with google"
        />
        continue with Facebook
      </Form.SocialButton>
    </>
  );
};
