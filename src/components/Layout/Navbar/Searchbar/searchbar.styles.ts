import { Button } from "@/components/Shared";
import { styled } from "@/stitches.config";

export const SearchbarForm = styled("form", {
  display: "flex",
  alignItems: "center",
  border: "2px solid $primary",
  width: "100%",
  height: 43,
  position: "relative",
});

export const SearchbarInput = styled("input", {
  all: "unset",
  outline: "none",
  fontSize: 14,
  width: "100%",
  padding: "0.7rem 1rem",
  border: 0,
});

export const SearchbarButton = styled(Button, {
  background: "$primary",
  color: "white",
  width: 60,
  height: "100%",
});
