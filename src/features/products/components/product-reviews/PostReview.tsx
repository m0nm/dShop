import React, { useState, useRef, FormEvent } from "react";
import { Rating } from "react-simple-star-rating";
import { usePostReview } from "../../hooks/usePostReview";
import { Button, Input } from "@/components/Shared";
import { Form } from "./post-review.styles";

export const PostReview = ({ productId }: { productId: number }) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [rating, setRating] = useState(0);
  const { handlePostReview, isLoading } = usePostReview(productId);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      rating,
      content: textRef?.current?.value,
      name: nameRef?.current?.value,
    };

    handlePostReview(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Post review</h3>

      <div className="input-field">
        <label style={{ display: "block", marginBottom: 5 }}>Your Rate*</label>
        <Rating onClick={handleRating} size={22} transition allowFraction />
      </div>

      <div className="input-field">
        <label htmlFor="comment">Comment*</label>
        <textarea required ref={textRef} id="comment" />
      </div>

      <div className="input-field">
        <label htmlFor="name">Name*</label>
        <Input required ref={nameRef} id="name" />
      </div>

      <div className="input-field">
        <label htmlFor="email">
          Email <small>(Your email won&apos;t be shown)</small>*
        </label>

        <Input required id="email" type="email" />
      </div>

      <Button variant="primary" disabled={isLoading}>
        Post review
      </Button>
    </Form>
  );
};
