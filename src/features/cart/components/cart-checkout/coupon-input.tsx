import React, { useState, useRef, FormEvent, useEffect } from "react";
import { useCoupon } from "../../hooks/useCoupon";
import { toast } from "react-toastify";
import { Input } from "@/components/Shared";
import { useCartTotalStore } from "../../store/cart-total-store";

export const CouponInput = () => {
  const { couponCode, setCouponCode } = useCartTotalStore();
  const { data, isLoading, isSuccess, handleCoupon } = useCoupon();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const code = ref?.current?.value;

    if (code === couponCode) {
      return toast("Coupon is already used");
    }

    handleCoupon(code as string);
  };

  useEffect(() => {
    if (isSuccess) setCouponCode(data?.code as string);
  }, [isSuccess, data, setCouponCode]);

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
