import React from "react";
import { useGetAccount } from "../../../hooks/useGetAccount";
import { useUpdateAccount } from "../../../hooks/useUpdateAccount";
import { useForm } from "react-hook-form";
import { InputFields } from "./details-input-fields";

export type IDetails = {
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

        <InputFields register={register} errors={errors} />

        <button disabled={isLoading}>Save changes</button>
      </form>
    </>
  );
};
