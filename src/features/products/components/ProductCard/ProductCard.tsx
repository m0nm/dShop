import Image from "next/image";
import React from "react";
import { IProduct } from "../../api";
import { useConvertCurrency } from "../../hooks/useConvertCurency";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  ProductBadge,
  ProductInfo,
  ProductItem,
  ProductPrice,
  ProductThumbnail,
  ProductTitle,
} from "./productCard.styles";

// skeletons
const ProductCardSkeleton = () => {
  return (
    <div style={{ height: "100%", marginRight: 10 }}>
      <Skeleton height={160} />
      <Skeleton style={{ marginTop: 12 }} />
      <Skeleton height={10} width={"40%"} style={{ marginTop: 5 }} />
    </div>
  );
};

export const skeletons = Array.apply(null, Array(10)).map((n, i) => (
  <ProductCardSkeleton key={i} />
));

// card
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
