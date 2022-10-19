import React from "react";
import { useForm } from "react-hook-form";
import { formRules } from "@/features/account/utils/account-form-rules";
import { useChangePassword } from "@/features/account/hooks/useChangePassword";
import { Input, InputFeedback } from "@/components/Shared";
import { DeleteAccount } from "./delete-account";

type ISettings = {
  password: string;
  new_password: string;
  new_password_confirmation: string;
};

export const MySettings = () => {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    register,
  } = useForm<ISettings>();

  const { handleChange, isLoading } = useChangePassword();

  const onSubmit = (data: ISettings) => handleChange(data);

  return (
    <>
      <h1 className="title">My account settings</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="sub-title">Change Password</h4>

        <div className="input-field">
          <label htmlFor="password">Current Password</label>
          <Input
            {...register("password", formRules().currentPassword)}
            invalid={errors.password && true}
            id="password"
            type="password"
          />

          <InputFeedback>{errors.password?.message}</InputFeedback>
        </div>

        <div className="input-field">
          <label htmlFor="new_password">New Password</label>
          <Input
            {...register(
              "new_password",
              formRules(getValues("password")).newPassword
            )}
            invalid={errors.new_password && true}
            id="new_password"
            type="password"
          />
          <InputFeedback>{errors.new_password?.message}</InputFeedback>
        </div>

        <div className="input-field">
          <label htmlFor="conf_password">Confirm New Password</label>
          <Input
            {...register(
              "new_password_confirmation",
              formRules(getValues("new_password")).confirmPassword
            )}
            invalid={errors.new_password_confirmation && true}
            id="conf_password"
            type="password"
          />
          <InputFeedback>
            {errors.new_password_confirmation?.message}
          </InputFeedback>
        </div>

        <button disabled={isLoading}>Save changes</button>
      </form>

      <DeleteAccount />
    </>
  );
};
