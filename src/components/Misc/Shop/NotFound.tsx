import { Flex } from "@/components/Shared";
import Image from "next/image";
import React from "react";
import emptyBox from "@/../public/icons/empty-box.svg";

export const NotFound = () => {
  return (
    <Flex
      flexCol
      alignCenter
      css={{ width: "100%", textAlign: "center", marginTop: "4rem" }}
    >
      <Image src={emptyBox} alt="nothing found!" width={120} height={120} />

      <h4
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: "#111",
          margin: "2rem 0 1rem 0",
        }}
      >
        Nothing found
      </h4>

      <p
        style={{
          fontSize: 16,
          fontWeight: 300,
          color: "#333",
        }}
      >
        Don&apos;t be sad, We have so many other products that you will like
      </p>
    </Flex>
  );
};
