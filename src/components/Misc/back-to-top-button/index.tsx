import React, { useEffect, useState } from "react";
import { styled } from "@/stitches.config";
import { Icon } from "ts-react-feather-icons";
import { Button } from "@/components/Shared";
import { keyframes } from "@stitches/react";

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },

  "100%": {
    opacity: 0.5,
  },
});

const Box = styled(Button, {
  display: "none",
  position: "fixed",
  bottom: "3rem",
  right: "3rem",
  placeItems: "center",
  color: "white",
  height: 30,
  width: 30,
  fontWeight: 700,
  animation: `${fadeIn} 150ms`,

  variants: { visible: { true: { display: "grid" } } },
});

export const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkOffset = () => {
      if (!show && window.pageYOffset > 1000) {
        setShow(true);
      } else if (show && window.pageYOffset <= 1000) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkOffset);

    return () => window.removeEventListener("scroll", checkOffset);
  }, [show]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box variant="primary" visible={show} onClick={scrollTop}>
      <Icon name="arrow-up" size={24} />
    </Box>
  );
};
