import Image from "next/image";
import React from "react";
import { IProduct } from "../../api";

import {
  ProductBadge,
  ProductInfo,
  ProductItem,
  ProductPrice,
  ProductThumbnail,
  ProductTitle,
} from "./productCard.styles";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <ProductItem>
      {product.sale_price && <ProductBadge variant="sale">Sale</ProductBadge>}

      {product.condition !== "default" && (
        <ProductBadge variant={product.condition}>
          {product.condition}
        </ProductBadge>
      )}

      <ProductThumbnail className="thumbnail">
        <figure>
          <Image
            src={product.images[0]}
            alt={product.name}
            layout="fill"
            objectFit="contain"
          />
        </figure>
      </ProductThumbnail>

      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        {product.sale_price ? (
          <ProductPrice>
            <span className="sale-price">${product.sale_price}</span>
            <del>${product.price}</del>
          </ProductPrice>
        ) : (
          <ProductPrice>
            <span className="normal-price">${product.price}</span>
          </ProductPrice>
        )}
      </ProductInfo>
    </ProductItem>
  );
};
