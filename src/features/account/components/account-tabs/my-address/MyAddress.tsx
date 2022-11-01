import { useGetAccount } from "@/features/account/hooks/useGetAccount";
import React from "react";
import { useForm } from "react-hook-form";
import { useUpdateAccount } from "../../../hooks/useUpdateAccount";
import { InputFields } from "./address-input-fields";

export type IAddress = {
  country: string;
  state: string;
  city: string;
  street_address: string;
  zip_code: string;
};

export const MyAddress = () => {
  const { data } = useGetAccount();
  const { handleUpdate, isLoading } = useUpdateAccount();

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
        <InputFields register={register} errors={errors} control={control} />
        <button disabled={isLoading}>Save changes</button>
      </form>
    </>
  );
};
