import Router from "next/router";
import React, { useState } from "react";
import { IProduct, useShopProductStore } from "../..";
import { useConvertCurrency } from "@/hooks";
import { AddToCart } from "@/features/cart";

import {
  ProductDetailContainer,
  DetailBox,
  AttributeItem,
} from "./product-detail.styles";
import { ImagesCarousel } from "./images-carousel";
import { QuantityInput } from "./quantity-input";
import { ProductAttributes } from "./product-attributes";

export const ProductDetail = ({ product }: { product: IProduct }) => {
  const { convertCurrency } = useConvertCurrency();
  const price = convertCurrency(product.price);
  const salePrice = convertCurrency(product.sale_price);

  const [quantity, setQuantity] = useState(0);

  // push to shop page on subcategory click
  const { setFilterSubcategories } = useShopProductStore();
  const onClickCategory = () => {
    setFilterSubcategories([product.subcategory]);
    Router.push("/shop");
  };

  return (
    <ProductDetailContainer>
      {/* images */}
      <ImagesCarousel images={product.images} />

      <DetailBox className="detail-box">
        <div id="portal" className="portal" />
        <h1 className="product-title">{product.name}</h1>

        <div className="product-meta">
          <span>STOCK: {product.stock}</span>

          <span onClick={onClickCategory}>
            CATEGORY:
            <a> {product.subcategory}</a>
          </span>
        </div>

        {/* price */}
        <div>
          {product.sale_price ? (
            <h3 className="price">
              {salePrice} <del>{price}</del>{" "}
            </h3>
          ) : (
            <h3 className="price">{price}</h3>
          )}
        </div>

        {/* summary description dummy */}
        <p className="summary-desc">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
          adipiscing.
        </p>

        {/* product attributes */}
        {product.attributes.map((attribute) => (
          <ProductAttributes
            key={attribute.id}
            initialValue={attribute.value[0]}
          >
            <div className="attribute">
              <span>{attribute.name}:</span>

              <div>
                {attribute.value.map((val) => (
                  <AttributeItem key={val} value={val}>
                    {val}
                  </AttributeItem>
                ))}
              </div>
            </div>
          </ProductAttributes>
        ))}

        <QuantityInput quantity={quantity} setQuantity={setQuantity} />

        <AddToCart product={product} quantity={quantity} />
      </DetailBox>
    </ProductDetailContainer>
  );
};
