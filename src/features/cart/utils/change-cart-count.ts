export const changeCartCount = (count: number) => {
  if (typeof window !== undefined) {
    localStorage.setItem("cart-count", JSON.stringify(count));
    window.dispatchEvent(new Event("storage"));
  }
};
