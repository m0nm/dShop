import Image from "next/image";
import React from "react";
import { useGetProductReviews } from "../../hooks/useGetProductReviews";
import { Rating } from "react-simple-star-rating";
import { Box } from "./product-reviews.styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import avatar from "@/../public/avatar.png";

const ReviewSkeleton = () => {
  return (
    <div className="card">
      <Skeleton circle height={60} width={60} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Rating readonly initialValue={0} size={16} />
        <Skeleton width={220} height={15} />
        <Skeleton width={220} height={45} className="comment" />
      </div>
    </div>
  );
};

export const ProductReviews = ({ productId }: { productId: number }) => {
  const { data, isLoading } = useGetProductReviews(productId);

  return (
    <Box>
      <h3>Reviews:</h3>

      {isLoading && (
        <>
          <ReviewSkeleton />
          <ReviewSkeleton />
          <ReviewSkeleton />
        </>
      )}

      {data?.map((item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const day = date.getDay();
        const month = date.toLocaleString("default", {
          month: "long",
        });

        return (
          <div key={item.id} className="card">
            {/* avatar */}
            <div className="avatar">
              <Image src={avatar} layout="fill" alt="" />
            </div>

            {/* content */}
            <div>
              {/* rating */}
              <Rating
                readonly
                allowFraction
                initialValue={item.rating}
                size={16}
              />
              {/* name */}
              <p className="name">
                by <b>{item.name}</b> on{" "}
                <time>
                  {month}, {day} {year}
                </time>
              </p>

              {/* comment */}
              <p className="comment">{item.content}</p>
            </div>
          </div>
        );
      })}
    </Box>
  );
};
