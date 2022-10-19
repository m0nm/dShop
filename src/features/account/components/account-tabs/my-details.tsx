import React from "react";
import { useGetAccount } from "../../hooks/useGetAccount";
import { useUpdateAccount } from "../../hooks/useUpdateAccount";
import { useForm } from "react-hook-form";
import { formRules } from "../../utils/account-form-rules";
import { Input, InputFeedback, Flex } from "@/components/Shared";

type IDetails = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export const MyDetails = () => {
  const { data } = useGetAccount();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IDetails>({ defaultValues: data });

  const { handleUpdate, isLoading } = useUpdateAccount();

  const onSubmit = (data: IDetails) => handleUpdate(data);

  return (
    <>
      <h1 className="title">My details</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="sub-title">Personal information</h4>

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
          <label htmlFor="phone">phone number (optional)</label>
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

        <button disabled={isLoading}>Save changes</button>
      </form>
    </>
  );
};
