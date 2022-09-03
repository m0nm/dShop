import Image from "next/image";
import React from "react";
import { Container, Flex } from "@/components/Shared";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IBanner } from "../api";
import { CarouselContainer, CarouselItem } from "./banner.styles";
import miniBanner3 from "@/../public/mini-banners/3.jpg";
import miniBanner4 from "@/../public/mini-banners/4.jpg";

type IProps = {
  banners: IBanner[];
};

export const Banner = ({ banners }: IProps) => {
  return (
    <Container css={{ flexDirection: "column" }}>
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

      {/* mini banenrs */}
      <Flex css={{ gap: 4, width: "100%" }}>
        <figure style={{ position: "relative", width: "50%", height: 190 }}>
          <Image src={miniBanner3} alt="" layout="fill" quality={100} />
        </figure>

        <figure style={{ position: "relative", width: "50%", height: 190 }}>
          <Image src={miniBanner4} alt="" layout="fill" quality={100} />
        </figure>
      </Flex>
    </Container>
  );
};
