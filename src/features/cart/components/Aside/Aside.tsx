import { useConvertCurrency } from "@/hooks";
import { useCartTotalStore } from "../../store/carttotalStore";
import { CouponInput } from "./CouponInput";
import { Wrapper } from "./aside.styles";

export const Aside = () => {
  const { total } = useCartTotalStore();
  const { convertCurrency } = useConvertCurrency();

  const totalPrice = convertCurrency(total);

  return (
    <Wrapper>
      <h3 className="heading">Cart Total</h3>

      <table>
        <tbody>
          <tr>
            <td>Cart Subtotal</td>
            <td>
              <b>{totalPrice}</b>
            </td>
          </tr>

          <tr>
            <td>Shipping</td>

            <td className="shipping-options">
              <div>
                <input type="radio" name="shipping-option" id="flat-rate" />
                <label htmlFor="flat-rate">Flat rate</label>
              </div>

              <div>
                <input type="radio" name="shipping-option" id="local-pickup" />
                <label htmlFor="local-pickup">Local pickup</label>
              </div>

              <div>
                <input type="radio" name="shipping-option" id="free-shipping" />
                <label htmlFor="free-shipping">Free shipping</label>
              </div>
            </td>
          </tr>

          <tr>
            <td>Total</td>
            <td>
              <b>{totalPrice}</b>
            </td>
          </tr>
        </tbody>
      </table>

      <CouponInput />

      <button className="checkout-btn">Proceed to checkout</button>
    </Wrapper>
  );
};
