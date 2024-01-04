import React from "react";
import { movieData } from "./data";
import Card from "./Card";

export default function Cards() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "brown",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {movieData.map((data) => {
        const { src, alt, title, rating, rate } = data;
        return (
          <Card src={src} alt={alt} title={title} rating={rating} rate={rate} />
        );
      })}
    </div>
  );
}
