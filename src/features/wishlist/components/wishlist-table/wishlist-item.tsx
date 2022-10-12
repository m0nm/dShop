import Link from "next/link";
import Image from "next/image";
import React from "react";

import { useConvertCurrency } from "@/hooks";
import { useDeleteWishlistItem } from "../../hooks/useDeleteWishlistItem";
import { IProduct } from "@/features/products";
import { AddToCart } from "@/features/cart";

import { Flex } from "@/components/Shared";
import { Icon } from "ts-react-feather-icons";
import { TableRow } from "./wishlist-table.styles";

export const WishlistItem = ({ product }: { product: IProduct }) => {
  const { convertCurrency } = useConvertCurrency();
  const { handleDelete } = useDeleteWishlistItem(product.id);

  return (
    <TableRow>
      <td className="remove" onClick={handleDelete}>
        <Icon name="x" size={15} />
      </td>

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

      <td className="stock-status">
        <span>{product.stock > 0 ? "In Stock" : "Out Of Stock"}</span>
      </td>

      <td className="product-price">
        <span>{convertCurrency(product.sale_price || product.price)}</span>
      </td>

      <td className="cart-btn">
        <AddToCart product={product} quantity={1} />
      </td>
    </TableRow>
  );
};
