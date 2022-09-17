import React from "react";
import { useForm } from "react-hook-form";
import { formRules } from "../../utils/account_form_rules";
import { Input, InputFeedback, Flex } from "@/components/Shared";

type IDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
};

export const MyDetails = () => {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    register,
  } = useForm<IDetails>();

  const onSubmit = () => console.log("");

  return (
    <>
      <h1 className="title">My details</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="sub-title">Personal information</h4>
        <Flex alignCenter css={{ gap: 20 }}>
          <div className="input-field">
            <label htmlFor="first_name">first name*</label>
            <Input
              {...register("firstName", formRules().firstName)}
              invalid={errors.firstName && true}
              id="first_name"
            />
            <InputFeedback>{errors.firstName?.message}</InputFeedback>
          </div>

          <div className="input-field">
            <label htmlFor="last_name">last name*</label>
            <Input
              {...register("lastName", formRules().lastName)}
              invalid={errors.lastName && true}
              id="last_name"
            />
            <InputFeedback>{errors.lastName?.message}</InputFeedback>
          </div>
        </Flex>

        <div className="input-field">
          <label htmlFor="phone">phone number*</label>
          <Input
            {...register("phone", formRules().phone)}
            invalid={errors.phone && true}
            id="phone"
            type="tel"
          />
          <InputFeedback>{errors.phone?.message}</InputFeedback>
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

        <button>Save changes</button>
      </form>
    </>
  );
};
