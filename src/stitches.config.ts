import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      primary: "#FF2832",
      secondary: "#444444",
      neutral: "#666666",
      success: "#14BA3A",
      info: "#00B3CF",
      error: "#EC0F24",
    },
  },

  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },
});
