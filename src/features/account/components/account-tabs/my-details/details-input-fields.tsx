import React from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { IDetails } from "..";
import { formRules } from "../../../utils/account-form-rules";
import { Flex, Input, InputFeedback } from "@/components/Shared";

type IProps = {
  register: UseFormRegister<IDetails>;
  errors: FieldErrorsImpl<IDetails>;
};

export const InputFields = ({ register, errors }: IProps) => {
  return (
    <>
      <Flex alignCenter css={{ gap: 20 }}>
        <div className="input-field">
          <label htmlFor="first_name">first name*</label>
          <Input
            {...register("first_name", formRules().firstName)}
            invalid={errors.first_name && true}
            id="first_name"
          />
          <InputFeedback>{errors.first_name?.message}</InputFeedback>
        </div>

        <div className="input-field">
          <label htmlFor="last_name">last name*</label>
          <Input
            {...register("last_name", formRules().lastName)}
            invalid={errors.last_name && true}
            id="last_name"
          />
          <InputFeedback>{errors.last_name?.message}</InputFeedback>
        </div>
      </Flex>

      <div className="input-field">
        <label htmlFor="phone">phone number*</label>
        <Input
          {...register("phone_number", formRules().phone)}
          invalid={errors.phone_number && true}
          id="phone"
          type="tel"
        />
        <InputFeedback>{errors.phone_number?.message}</InputFeedback>
        <small>Keep 9-digit format with no spaces and dashes</small>
      </div>

      <h4 className="sub-title">E-mail Address</h4>

      <div className="input-field">
        <label htmlFor="email">Email Address*</label>
        <Input
          {...register("email", formRules().email)}
          invalid={errors.email && true}
          id="email"
          type="email"
        />
        <InputFeedback>{errors.email?.message}</InputFeedback>
      </div>
    </>
  );
};
