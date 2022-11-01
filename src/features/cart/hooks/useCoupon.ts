import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { checkCoupon } from "..";

export const useCoupon = () => {
  const { data, isLoading, isSuccess, mutate } = useMutation(
    (couponCode: string) => checkCoupon(couponCode),
    {
      onSuccess: () => {
        toast("Coupon applied!");
      },
    }
  );

  const handleCoupon = (couponCode: string) => {
    mutate(couponCode);
  };

  return { data: data?.data, isLoading, isSuccess, handleCoupon };
};
