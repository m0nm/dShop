import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { CartToast } from "../components/CartToast";
import { addToCart, changeCartCount } from "..";
import { IProduct } from "@/features/products";
import { getCookie } from "cookies-next";

export const useAddToCart = (product: IProduct, quantity: number) => {
  const { mutate, isLoading } = useMutation(
    () => addToCart(product.id, quantity),
    {
      onSuccess: (res) => {
        const { cartCount } = res;

        changeCartCount(cartCount);

        toast(<CartToast product={product} />, {
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
