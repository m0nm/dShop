import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";
import { Breadcrumb, Container } from "@/components/Shared";
import { ProductDetailsTabs } from "@/components/Misc/product-details-tabs";
import {
  getProductDetail,
  IProductDetail,
  ProductDetail,
  RelatedProducts,
} from "@/features/products";

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  const { product, relatedProducts } = await getProductDetail(
    params?.slug as string
  );

  if (res.statusCode === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      relatedProducts,
    },
  };
};

const ProductDetailPage = ({ product, relatedProducts }: IProductDetail) => {
  return (
    <Container flexCol>
      <Head>
        <title>dShop | {product.name}</title>
      </Head>

      <Breadcrumb content="product detail" />

      <ProductDetail product={product} />

      {/* description and reviews*/}
      <ProductDetailsTabs desc={product.description} productId={product.id} />

      {/* related products */}
      <RelatedProducts relatedProducts={relatedProducts} />
    </Container>
  );
};

export default ProductDetailPage;
