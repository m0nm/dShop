import Link from "next/link";
import React from "react";
import { Flex } from ".";
import { Icon } from "ts-react-feather-icons";

export const Breadcrumb = ({ content }: { content: string }) => {
  return (
    <Flex
      css={{
        gap: 8,
        fontSize: 14,
        textTransform: "uppercase",
        padding: 12,
        margin: "1rem 0",
        justifySelf: "flex-start",
        alignSelf: "flex-start",
      }}
    >
      <Link href="/">Home</Link>
      <Icon name="chevron-right" size="14" />
      {content}
    </Flex>
  );
};
