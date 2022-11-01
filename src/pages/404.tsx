import Head from "next/head";
import Link from "next/link";
import image from "@/../public/404.png";
import React from "react";
import { styled } from "@/stitches.config";
import { Button } from "@/components/Shared";

const Box = styled("div", {
  display: "grid",
  placeItems: "center",
  color: "#111",
  padding: "10rem 0",

  "& h1": { fontSize: 34, fontWeight: 700 },

  "& small": { marginTop: "2rem" },

  "& .bg-img": {
    maxWidth: 609,
    height: 130,
    backgroundPosition: "center",
    backgroundImage: `url(${image.src})`,
    width: "100%",
  },
});

const NotFoundPage = () => {
  return (
    <Box>
      <Head>
        <title>dShop | Not Found</title>
      </Head>

      <h1>OOOPS!</h1>

      <div className="bg-img" />

      <small>THIS PAGE CAN&apos;T BE FOUND.</small>

      <Link href="/">
        <Button variant="primary" css={{ marginTop: "1rem" }}>
          Go Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
