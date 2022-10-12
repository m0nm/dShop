import { useMutation } from "react-query";
import { IProduct } from "@/features/products";
import { addToCart, changeCartCount } from "..";
import { toast } from "react-toastify";
import { ProductToast } from "@/components/Misc/ProductToast";
import { getCookie } from "cookies-next";

export const useAddToCart = (product: IProduct, quantity: number) => {
  const { mutate, isLoading } = useMutation(
    () => addToCart(product.id, quantity),
    {
      onSuccess: (res) => {
        const { cartCount } = res;

        changeCartCount(cartCount);

        toast(<ProductToast product={product} type="Cart" />, {
          position: "bottom-left",
          pauseOnHover: true,
        });
      },
    }
  );

  const handleAddToCart = () => {
    getCookie("token") === "" ? toast.error("Please login first") : mutate();
  };

  return { handleAddToCart, isLoading };
};
