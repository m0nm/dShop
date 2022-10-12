export const changeWishlistCount = (count: number) => {
  if (typeof window !== undefined) {
    localStorage.setItem("wishlist-count", JSON.stringify(count));
    window.dispatchEvent(new Event("storage"));
  }
};
