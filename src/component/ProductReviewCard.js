import React from "react";
import "../styles/productReviewCard.css";

const ProductReviewCard = ({ image, index, review, name, price }) => {
  return (
    <div className="productReviewCard">
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductReviewCard;
