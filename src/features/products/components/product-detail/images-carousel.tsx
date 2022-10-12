import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IProduct } from "../..";
import Carousel from "react-multi-carousel";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { ImagesBox } from "./product-detail.styles";

const responsive = {
  mobile: { breakpoint: { min: 0, max: 768 }, items: 1 },
  tablet: { breakpoint: { min: 768, max: 1024 }, items: 1 },
  desktop: { breakpoint: { min: 1024, max: 30000 }, items: 1 },
};

const responsiveThumbs = {
  mobile: { breakpoint: { min: 0, max: 768 }, items: 3 },
  tablet: { breakpoint: { min: 768, max: 1024 }, items: 3 },
  desktop: { breakpoint: { min: 1024, max: 30000 }, items: 4 },
};

export const ImagesCarousel = ({ images }: { images: IProduct["images"] }) => {
  const carouselRef = useRef<Carousel>(null);
  const [slide, setSlide] = useState<number>(0);

  const handleSlideClick = (value: number) => {
    setSlide(value);
    carouselRef.current?.goToSlide(value);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateImageSize() {
      if (containerRef.current?.clientWidth) {
        const width = containerRef.current?.clientWidth;
        const height = containerRef.current?.clientHeight;
        setImageSize({ width, height });
      }
    }

    updateImageSize();

    window.addEventListener("resize", updateImageSize);

    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  return (
    <ImagesBox className="images-box">
      {/* thumbs */}
      <div className="image-thumbs">
        <Carousel
          responsive={responsiveThumbs}
          swipeable={false}
          draggable={false}
          ssr
        >
          {images.map((image, i) => (
            <button
              key={image}
              onClick={() => handleSlideClick(i)}
              className={`image-thumb ${slide === i ? "active" : ""}`}
            >
              <Image src={image} alt="product image" layout="fill" />
            </button>
          ))}
        </Carousel>
      </div>

      <div ref={containerRef} className="carousel">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          beforeChange={(nextSlide) => setSlide(nextSlide)}
          swipeable={false}
          draggable={false}
        >
          {images.map((image) => (
            <InnerImageZoom
              key={image}
              src={image}
              zoomSrc={image}
              zoomType="hover"
              hideHint
              hideCloseButton
            />
          ))}
        </Carousel>
      </div>
    </ImagesBox>
  );
};
