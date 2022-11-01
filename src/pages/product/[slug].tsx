import { GetServerSideProps } from "next";
import React from "react";
import { Breadcrumb, Container } from "@/components/Shared";
import {
  getProductDetail,
  IProductDetail,
  ProductDetail,
  RelatedProducts,
} from "@/features/products";
import Head from "next/head";

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

      {/* description */}
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
        dangerouslySetInnerHTML={{ __html: product.description }}
      />

      {/* related products */}
      <RelatedProducts relatedProducts={relatedProducts} />
    </Container>
  );
};

export default ProductDetailPage;
