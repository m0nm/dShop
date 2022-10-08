import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useDeleteCartItem } from "../../hooks/useDeleteCartItem";
import { useConvertCurrency } from "@/hooks";
import { QuantityInput } from "@/features/products";
import { Flex } from "@/components/Shared";
import { TableRow } from "./cartTable.styles";
import { ICart } from "../..";
import { Icon } from "ts-react-feather-icons";
import { useUpdateCartStore } from "../../store/updateCartStore";

export const CartItem = ({ item }: { item: ICart }) => {
  const { product, quantity: initialQuantity } = item;
  const [quantity, setQuantity] = useState(initialQuantity);

  const { convertCurrency } = useConvertCurrency();
  const { setUpdateItems, setUpdate, update } = useUpdateCartStore();
  const { handleDeleteCartItem } = useDeleteCartItem(item.product.id);

  const subtotal = useMemo(() => {
    return (product.sale_price || product.price) * quantity;
  }, [quantity, product.price, product.sale_price]);

  useEffect(() => {
    if (quantity !== initialQuantity) {
      setUpdate(true);
      setUpdateItems({ productId: product.id, quantity });
    } else {
      setUpdate(false);
    }
  }, [quantity, initialQuantity, product.id, setUpdateItems, setUpdate]);

  return (
    <TableRow key={product.id}>
      <td className="product-name">
        <Flex alignCenter>
          <Link href={`/product/${product.slug}`}>
            <a>
              <figure>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
            </a>
          </Link>

          <Link href={`/product/${product.slug}`}>
            <span>{product.name}</span>
          </Link>
        </Flex>
      </td>

      <td className="product-price">
        <span>{convertCurrency(product.sale_price || product.price)}</span>
      </td>

      <td className="product-quantity">
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      </td>

      <td className="product-subtotal">{convertCurrency(subtotal)}</td>

      <td className="remove" onClick={handleDeleteCartItem}>
        <Icon name="x" size={15} />
      </td>
    </TableRow>
  );
};
