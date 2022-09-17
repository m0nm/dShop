import Image from "next/image";
import React from "react";
import { IProduct } from "../../api";
import { useConvertCurrency } from "../../hooks/useConvertCurency";

import {
  ProductBadge,
  ProductInfo,
  ProductItem,
  ProductPrice,
  ProductThumbnail,
  ProductTitle,
} from "./productCard.styles";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const currencyPrice = useConvertCurrency(product.price);
  const currencySalePrice = useConvertCurrency(product.sale_price);

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
            <span className="sale-price">{currencySalePrice}</span>
            <del>{currencyPrice}</del>
          </ProductPrice>
        ) : (
          <ProductPrice>
            <span className="normal-price">{currencyPrice}</span>
          </ProductPrice>
        )}
      </ProductInfo>
    </ProductItem>
  );
};
