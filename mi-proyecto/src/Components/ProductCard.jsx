import React from "react";

export default function ImgMediaCard({ product }) {
  return (
    <>
      <div>{product.name}</div>
      <img src={product.image} height="140" alt="" />
    </>
  );
}
