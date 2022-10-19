import { useMutation } from "react-query";
import { IProduct } from "@/features/products";
import { getCookie } from "cookies-next";
import { addToWishlist } from "..";
import { changeWishlistCount } from "../utils/change-wishlist-count";
import { toast } from "react-toastify";
import { ProductToast } from "@/components/Misc/product-toast";

export const useAddToWishlist = (product: IProduct) => {
  const { mutate, isLoading } = useMutation(() => addToWishlist(product.id), {
    onSuccess: (res) => {
      const { wishlistCount } = res;

      if (wishlistCount) {
        changeWishlistCount(wishlistCount);
      }

      toast(<ProductToast product={product} type="Wishlist" />, {
        position: "bottom-left",
        pauseOnHover: true,
      });
    },
  });

  const handleAddToWishlist = () => {
    getCookie("token") === "" ? toast.error("Please login first") : mutate();
  };

  return { handleAddToWishlist, isLoading };
};
