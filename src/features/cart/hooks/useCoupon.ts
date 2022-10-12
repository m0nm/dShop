import { useMutation } from "react-query";
import { checkCoupon } from "..";
import { useCartTotalStore } from "../store/cart-total-store";

export const useCoupon = () => {
  const { setTotal, total } = useCartTotalStore();

  const { data, isLoading, isSuccess, mutate } = useMutation(
    (couponCode: string) => checkCoupon(couponCode),

    {
      onSuccess: (res) => {
        const { data } = res;

        if (data.type === "percent") {
          setTotal(total * (data.value / 100));
        } else {
          const isPositive = total - data.value > 0;

          isPositive ? setTotal(total - data.value) : setTotal(0);
        }
      },
    }
  );

  const handleCoupon = (couponCode: string) => {
    mutate(couponCode);
  };

  return { data: data?.data, isLoading, isSuccess, handleCoupon };
};
