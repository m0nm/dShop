import React from "react";
import { Modal } from "@/components/Shared";
import { IProduct, ProductDetail } from "../..";
import { useViewProductStore } from "../../store/viewProductStore";

export const ViewProductModal = () => {
  const { open, setOpen, product } = useViewProductStore();

  return (
    <Modal open={open} onOpenChange={setOpen} type="quick-view">
      <ProductDetail product={product as IProduct} />
    </Modal>
  );
};
