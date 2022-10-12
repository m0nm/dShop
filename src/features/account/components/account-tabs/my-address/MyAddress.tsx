import React from "react";
import { Flex, Input, InputFeedback } from "@/components/Shared";
import { useForm, Controller } from "react-hook-form";
import { formRules } from "../../../utils/account-form-rules";
import { SelectCountry } from "./select-country";

type IAddress = {
  country: string;
  city: string;
  state: string;
  street: string;
  zipCode: number;
};

export const MyAddress = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<IAddress>();

  const onSubmit = () => console.log("");

  return (
    <>
      <h1 className="title">Billing address</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label htmlFor="country">Country / Region*</label>

          <Controller
            name="country"
            control={control}
            rules={formRules().country}
            render={({ field }) => <SelectCountry {...field} />}
          />

          <InputFeedback>{errors.country?.message}</InputFeedback>
        </div>

        <div className="input-field">
          <label htmlFor="street">Street Address*</label>
          <Input {...register("street", formRules().street)} id="street" />
          <InputFeedback>{errors.street?.message}</InputFeedback>
        </div>

        <Flex alignCenter css={{ gap: 20 }}>
          <div className="input-field">
            <label htmlFor="city">Town / City*</label>
            <Input {...register("city", formRules().city)} id="city" />
            <InputFeedback>{errors.city?.message}</InputFeedback>
          </div>

          <div className="input-field">
            <label htmlFor="state">State*</label>
            <Input {...register("state", formRules().state)} id="state" />
            <InputFeedback>{errors.state?.message}</InputFeedback>
          </div>
        </Flex>

        <div className="input-field">
          <label htmlFor="zip">ZIP Code*</label>
          <Input
            {...register("zipCode", formRules().zipCode)}
            id="zip"
            type="number"
            step={1}
          />
          <InputFeedback>{errors.zipCode?.message}</InputFeedback>
        </div>

        <button>Save changes</button>
      </form>
    </>
  );
};
