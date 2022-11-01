import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCheckout } from "../../hooks/useCheckout";
import {
  AddressInputFields,
  DetailsInputFields,
  IAccount,
  useGetAccount,
} from "@/features/account";
import { LoadingOverlay } from "@/components/Shared";
import { Form } from "./checkout-info.styles";

export const CheckoutInfo = () => {
  const { data, isSuccess, isLoading } = useGetAccount();
  const { handleCheckout } = useCheckout();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    reset,
  } = useForm<any>({ defaultValues: data });

  useEffect(() => {
    isSuccess && reset(data);
  }, [isSuccess, reset, data]);

  const onSubmit: SubmitHandler<IAccount> = (data) => handleCheckout(data);

  return (
    <Form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <LoadingOverlay />}

      <DetailsInputFields register={register} errors={errors} />

      <br />

      <AddressInputFields
        register={register}
        control={control}
        errors={errors}
      />
    </Form>
  );
};
