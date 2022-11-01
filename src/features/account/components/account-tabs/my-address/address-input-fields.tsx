import React from "react";
import {
  Controller,
  FieldErrorsImpl,
  UseFormRegister,
  Control,
} from "react-hook-form";
import { IAddress } from "..";
import { formRules } from "../../../utils/account-form-rules";
import { SelectCountry } from "./select-country";
import { Flex, Input, InputFeedback } from "@/components/Shared";

type IProps = {
  register: UseFormRegister<IAddress>;
  errors: FieldErrorsImpl<IAddress>;
  control: Control<IAddress>;
};

export const InputFields = ({ register, errors, control }: IProps) => {
  return (
    <>
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
          invalid={errors.street_address && true}
          {...register("street_address", formRules().street)}
          id="street"
        />
        <InputFeedback>{errors.street_address?.message}</InputFeedback>
      </div>

      <Flex alignCenter css={{ gap: 20 }}>
        <div className="input-field">
          <label htmlFor="city">Town / City*</label>
          <Input
            {...register("city", formRules().city)}
            invalid={errors.city && true}
            id="city"
          />
          <InputFeedback>{errors.city?.message}</InputFeedback>
        </div>

        <div className="input-field">
          <label htmlFor="state">State*</label>
          <Input
            {...register("state", formRules().state)}
            invalid={errors.state && true}
            id="state"
          />
          <InputFeedback>{errors.state?.message}</InputFeedback>
        </div>
      </Flex>

      <div className="input-field">
        <label htmlFor="zip-code">ZIP Code*</label>
        <Input
          {...register("zip_code", formRules().zipCode)}
          invalid={errors.zip_code && true}
          id="zip-code"
          type="number"
          step={1}
        />
        <InputFeedback>{errors.zip_code?.message}</InputFeedback>
      </div>
    </>
  );
};
