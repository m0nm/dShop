import Image from "next/image";
import React from "react";
import { IProduct } from "../../api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useViewProductStore } from "../../store/view-product-store";
import { useConvertCurrency } from "@/hooks";
import { useAddToWishlist } from "@/features/wishlist";

import {
  ProductBadge,
  ProductInfo,
  ProductItem,
  ProductPrice,
  ProductThumbnail,
  ProductTitle,
} from "./product-card.styles";
import { Icon } from "ts-react-feather-icons";
import { LoadingOverlay } from "@/components/Shared";

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
  // product currency
  const { convertCurrency } = useConvertCurrency();
  const currencyPrice = convertCurrency(product.price);
  const currencySalePrice = convertCurrency(product.sale_price);

  // handle quick view
  const { setOpen, setProduct } = useViewProductStore();

  const onQuickViewClick = () => {
    setOpen(true);
    setProduct(product);
  };

  // handle wishlist
  const { handleAddToWishlist, isLoading } = useAddToWishlist(product);

  return (
    <ProductItem>
      {isLoading && <LoadingOverlay />}

      {product.sale_price && <ProductBadge variant="sale">Sale</ProductBadge>}

      {product.condition !== "default" && (
        <ProductBadge variant={product.condition}>
          {product.condition}
        </ProductBadge>
      )}

      <ProductThumbnail className="thumbnail">
        <a href={`/product/${product.slug}`}>
          <figure>
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </a>

        {/* wishlist button */}
        <button
          onClick={handleAddToWishlist}
          className="wishlist-btn"
          title="Add to wishlist"
        >
          <Icon name="heart" size={18} />
        </button>

        {/* quick view btn */}
        <button onClick={onQuickViewClick} className="view-btn">
          quick view
        </button>
      </ProductThumbnail>

      <a href={`/product/${product.slug}`}>
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
      </a>
    </ProductItem>
  );
};
