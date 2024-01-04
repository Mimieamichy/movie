import React from "react";
import Star from "./Star";

export default function Card({ src, alt, title, rating, rate }) {
  return (
    <div
      style={{
        width: "250px",
        color: "aliceblue",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <img src={`./imgs/${src}`} alt={alt} width={"200px"} />
      <h1>{title}</h1>
      <h5>{rating}</h5>
      <Star rate={rate} />
    </div>
  );
}
