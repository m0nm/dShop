import React from "react";
import { Flex, Input, InputFeedback } from "@/components/Shared";
import { useForm, Controller } from "react-hook-form";
import { useGetAccount } from "../../../hooks/useGetAccount";
import { useUpdateAccount } from "../../../hooks/useUpdateAccount";
import { formRules } from "../../../utils/account-form-rules";
import { SelectCountry } from "./select-country";

type IAddress = {
  country: string;
  state: string;
  city: string;
  street_address: string;
  zip_code: string;
};

export const MyAddress = () => {
  const { data } = useGetAccount();
  const { handleUpdate } = useUpdateAccount();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<IAddress>({ defaultValues: data });

  const onSubmit = (updateData: IAddress) => handleUpdate(updateData);

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
          <Input
            {...register("street_address", formRules().street)}
            id="street"
          />
          <InputFeedback>{errors.street_address?.message}</InputFeedback>
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
          <label htmlFor="zip-code">ZIP Code*</label>
          <Input
            {...register("zip_code", formRules().zipCode)}
            id="zip-code"
            type="number"
            step={1}
          />
          <InputFeedback>{errors.zip_code?.message}</InputFeedback>
        </div>

        <button>Save changes</button>
      </form>
    </>
  );
};
