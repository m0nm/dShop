import Image from "next/image";
import { useRouter } from "next/router";
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
import { useViewProductStore } from "../../store/viewProductStore";

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
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.slug}`);
  };

  const currencyPrice = useConvertCurrency(product.price);
  const currencySalePrice = useConvertCurrency(product.sale_price);

  const { setOpen, setProduct } = useViewProductStore();

  const onQuickViewClick = () => {
    setOpen(true);
    setProduct(product);
  };

  return (
    <ProductItem>
      {product.sale_price && <ProductBadge variant="sale">Sale</ProductBadge>}

      {product.condition !== "default" && (
        <ProductBadge variant={product.condition}>
          {product.condition}
        </ProductBadge>
      )}

      <ProductThumbnail className="thumbnail">
        <figure onClick={handleClick}>
          <Image
            src={product.images[0]}
            alt={product.name}
            layout="fill"
            objectFit="contain"
          />
        </figure>

        <button onClick={onQuickViewClick} className="view-btn">
          quick view
        </button>
      </ProductThumbnail>

      <ProductInfo onClick={handleClick}>
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
