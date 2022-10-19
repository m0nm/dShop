import { styled } from "@/stitches.config";
import { keyframes } from "@stitches/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { Icon } from "ts-react-feather-icons";

// styles
const ModalRoot = styled(DialogPrimitive.Root);
const ModalPortal = styled(DialogPrimitive.Portal);

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const ModalOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$overlay",
  position: "fixed",
  zIndex: 1000,
  inset: 0,
  overflowY: "auto",

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

// ------------------------------------------

const slideUp = keyframes({
  "0%": { transform: "translate(-50%,100%)" },
  "100%": { transform: "translate(-50%,-50%)" },
});

const slideLeft = keyframes({
  "0%": { transform: "translate(100%,0)" },
  "100%": { transform: "translate(0,0)" },
});

const ModalContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: 1200,
  transform: "translate(-50%, -50%)",
  animation: `${slideUp} 300ms ease-in-out`,
  "&:focus": { outline: "none" },

  variants: {
    type: {
      "mobile-navbar": {
        height: "100vh",
        width: "80%",
        padding: 12,
        top: 0,
        right: 0,
        left: "unset",
        animation: `${slideLeft} 300ms ease-in-out`,
        transform: "none",
      },

      "quick-view": {
        height: "80vh",
        padding: "10px 0",
        position: "relative",
        overflowY: "auto",
        width: "95%",
        "@lg": { width: "70vw" },

        // <ProductDetails />
        "& > div": {
          justifyContent: "space-between",
          gap: 12,
          marginTop: 0,
          paddingLeft: "1rem",

          "& .product-title": { fontSize: 20 },

          "& .image-thumbs": { display: "none" },

          // <ImageBox />
          "& .images-box": {
            height: 400,
            width: "100%",
            "@lg": { width: "50%" },

            "& .carousel": {
              overflow: "hidden",
            },

            "& .magnifier-container": { width: "100%" },
          },

          // <DetaillBox />
          "& .detail-box": {
            height: "100%",
            paddingRight: 10,
            width: "100%",
            "@lg": { width: "50%" },

            ".attribute": { width: "100%" },
          },
        },
      },

      auth: {
        padding: 20,
        width: "85vw",
        "@lg": {
          maxWidth: "450px",
        },
      },

      "delete-account": {
        padding: "1rem 2rem",
        height: 230,

        "& h4": { fontSize: 20, margin: "1rem 0" },
        "& button": {
          padding: "1rem 2rem",
          fontWeight: 600,
          position: "absolute",
          bottom: 18,
          right: 18,
          textTransform: "uppercase",
        },
      },
    },
  },
});

// ----------------------------

const ModalClose = styled(DialogPrimitive.Close, {
  border: "none",
  background: "transparent",
  float: "right",
  cursor: "pointer",
  padding: "0 10px 10px 0",
});

// ----------------------------
// component
type IModal = {
  children: ReactNode;
  type?: "mobile-navbar" | "auth" | "quick-view" | "delete-account";
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Modal = ({ children, open, onOpenChange, type }: IModal) => {
  return (
    <ModalRoot open={open} onOpenChange={onOpenChange}>
      <ModalPortal>
        <ModalOverlay>
          <ModalContent type={type}>
            <ModalClose asChild>
              <a>
                <Icon name="x" size="20" color="black" />
              </a>
            </ModalClose>

            {children}
          </ModalContent>
        </ModalOverlay>
      </ModalPortal>
    </ModalRoot>
  );
};
