import React from "react";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "./payment-methods.styles";

export const PaymentMethods = () => {
  return (
    <AccordionRoot type="single">
      <AccordionItem value="method-1">
        <AccordionHeader>
          <AccordionTrigger>
            <input
              form="checkout-form"
              required
              type="radio"
              name="payment-methods"
              id="method-1"
            />
            <label htmlFor="method-1">Direct bank transfer</label>
          </AccordionTrigger>
        </AccordionHeader>

        <AccordionContent>
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="method-2">
        <AccordionHeader>
          <AccordionTrigger>
            <input
              form="checkout-form"
              type="radio"
              name="payment-methods"
              id="method-2"
            />
            <label htmlFor="method-2">Check payments</label>
          </AccordionTrigger>
        </AccordionHeader>

        <AccordionContent>
          <p>
            Please send a check to Store Name, Store Street, Store Town, Store
            State / County, Store Postcode.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="method-3">
        <AccordionHeader>
          <AccordionTrigger>
            <input
              form="checkout-form"
              type="radio"
              name="payment-methods"
              id="method-3"
            />
            <label htmlFor="method-3">Cash on delivery</label>
          </AccordionTrigger>
        </AccordionHeader>

        <AccordionContent>
          <p>Pay with cash upon delivery.</p>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};
