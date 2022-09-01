import { Container } from "@/components/Shared";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IBanner } from "../api";
import { CarouselContainer, CarouselItem } from "./banner.styles";

type IProps = {
  banners: IBanner[];
};

export const Banner = ({ banners }: IProps) => {
  return (
    <Container>
      <CarouselContainer>
        <Carousel
          showStatus={false}
          showThumbs={false}
          autoPlay
          swipeable
          emulateTouch
          infiniteLoop
        >
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Image src={banner.url} alt="" layout="fill" />
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
};
