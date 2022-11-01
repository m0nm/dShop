import React, { useRef, FormEvent, useEffect } from "react";
import { useCoupon } from "../../hooks/useCoupon";
import { ICoupon } from "../..";
import { useCartTotalStore } from "../../store/cart-total-store";
import { toast } from "react-toastify";
import { Input } from "@/components/Shared";

export const CouponInput = () => {
  const { coupon, setCoupon } = useCartTotalStore();
  const { data, isLoading, isSuccess, handleCoupon } = useCoupon();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const code = ref?.current?.value;

    if (code === coupon.code) {
      return toast("Coupon is already used");
    }

    handleCoupon(code as string);
  };

  useEffect(() => {
    if (isSuccess) setCoupon(data as ICoupon);
  }, [isSuccess, data, setCoupon]);

  return (
    <form onSubmit={handleSubmit} className="coupon">
      <label htmlFor="coupon-input">Coupon</label>
      <Input ref={ref} required placeholder="Coupon code" id="coupon-input" />

      <button className="coupon-btn" disabled={isLoading}>
        Apply coupon
      </button>
    </form>
  );
};
