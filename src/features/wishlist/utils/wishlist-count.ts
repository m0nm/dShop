export const changeWishlistCount = (count: number) => {
  if (typeof window !== undefined) {
    localStorage.setItem("wishlist-count", JSON.stringify(count));
    window.dispatchEvent(new Event("storage"));
  }
};

export const getWishlistCount = () => {
  if (typeof window !== undefined) {
    const wishlistCount =
      JSON.parse(localStorage.getItem("wishlist-count") as string) || 0;

    return wishlistCount;
  }
};
