import Image from "next/image";
import React from "react";
import { Container, Flex } from "@/components/Shared";
import Carousel from "react-multi-carousel";
import { IBanner } from "../api";
import {
  CarouselContainer,
  CarouselItem,
  MiniBannerContainer,
} from "./banner.styles";
import miniBanner3 from "@/../public/mini-banners/3.jpg";
import miniBanner4 from "@/../public/mini-banners/4.jpg";

type IProps = {
  banners: IBanner[];
};

const responsive = {
  mobile: { breakpoint: { min: 0, max: 768 }, items: 1 },
  tablet: { breakpoint: { min: 768, max: 1024 }, items: 1 },
  desktop: { breakpoint: { min: 1024, max: 30000 }, items: 1 },
};

export const Banner = ({ banners }: IProps) => {
  return (
    <Container css={{ flexDirection: "column" }}>
      <CarouselContainer>
        <Carousel responsive={responsive} autoPlay swipeable draggable infinite>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Image src={banner.url} alt="" layout="fill" />
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselContainer>

      {/* mini banenrs */}
      <MiniBannerContainer>
        <figure>
          <Image src={miniBanner3} alt="" layout="fill" quality={100} />
        </figure>

        <figure>
          <Image src={miniBanner4} alt="" layout="fill" quality={100} />
        </figure>
      </MiniBannerContainer>
    </Container>
  );
};
