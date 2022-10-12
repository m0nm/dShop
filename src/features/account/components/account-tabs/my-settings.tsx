import React from "react";
import { useForm } from "react-hook-form";
import { Input, InputFeedback } from "@/components/Shared";
import { formRules } from "../../utils/account-form-rules";

type ISettings = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const MySettings = () => {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    register,
  } = useForm<ISettings>();

  const onSubmit = () => console.log("");

  return (
    <>
      <h1 className="title">My account settings</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="sub-title">Change Password</h4>

        <div className="input-field">
          <label htmlFor="password">Current Password</label>
          <Input
            {...register("currentPassword", formRules().currentPassword)}
            invalid={errors.currentPassword && true}
            id="password"
            type="password"
          />

          <InputFeedback>{errors.currentPassword?.message}</InputFeedback>
        </div>

        <div className="input-field">
          <label htmlFor="new_password">New Password</label>
          <Input
            {...register("newPassword", formRules().newPassword)}
            invalid={errors.newPassword && true}
            id="new_password"
            type="password"
          />
          <InputFeedback>{errors.newPassword?.message}</InputFeedback>
        </div>

        <div className="input-field">
          <label htmlFor="conf_password">Confirm New Password</label>
          <Input
            {...register(
              "confirmPassword",
              formRules(getValues("newPassword")).confirmPassword
            )}
            invalid={errors.confirmPassword && true}
            id="conf_password"
            type="password"
          />
          <InputFeedback>{errors.confirmPassword?.message}</InputFeedback>
        </div>

        <button>Save changes</button>
      </form>
    </>
  );
};
