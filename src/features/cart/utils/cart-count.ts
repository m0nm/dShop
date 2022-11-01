export const changeCartCount = (count: number) => {
  if (typeof window !== undefined) {
    localStorage.setItem("cart-count", JSON.stringify(count));
    window.dispatchEvent(new Event("storage"));
  }
};

export const getCartCount = () => {
  if (typeof window !== undefined) {
    const cartCount =
      JSON.parse(localStorage.getItem("cart-count") as string) || 0;

    return cartCount;
  }
};
