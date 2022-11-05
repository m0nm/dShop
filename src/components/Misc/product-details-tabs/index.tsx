import React from "react";
import { PostReview, ProductReviews } from "@/features/products";
import * as Tabs from "./product-details-tabs.styles";

type IProps = {
  desc: string;
  productId: number;
};

export const ProductDetailsTabs = ({ desc, productId }: IProps) => {
  return (
    <Tabs.TabsRoot defaultValue="description">
      <Tabs.TabsList>
        <Tabs.TabsTrigger value="description">Description</Tabs.TabsTrigger>
        <Tabs.TabsTrigger value="reviews">Reviews</Tabs.TabsTrigger>
      </Tabs.TabsList>

      {/* description */}
      <Tabs.TabsContent value="description">
        <h1
          style={{
            fontSize: 24,
            textAlign: "left",
            width: "100%",
            marginTop: "4rem",
          }}
        >
          Description
        </h1>

        <div
          style={{ lineHeight: 1.6, width: "100%" }}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </Tabs.TabsContent>

      <Tabs.TabsContent value="reviews" className="reviews">
        <ProductReviews productId={productId} />
        <PostReview productId={productId} />
      </Tabs.TabsContent>
    </Tabs.TabsRoot>
  );
};
