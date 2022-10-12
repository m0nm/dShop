import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";

export const ProductCarousel = ({ children }: { children: ReactNode }) => {
  const responsive = {
    mobile: { breakpoint: { min: 0, max: 768 }, items: 1 },
    tablet: { breakpoint: { min: 768, max: 1024 }, items: 2 },
    desktop: { breakpoint: { min: 1024, max: 30000 }, items: 5 },
  };

  return children ? (
    <Carousel draggable swipeable responsive={responsive}>
      {children}
    </Carousel>
  ) : null;
};
