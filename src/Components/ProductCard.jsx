import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <CardGroup>
        <Card border="light" className="mb-4 productCard">
          <Link className="cardLink" to={`/product/${product.slug}`}>
            <Card.Img
              variant="top"
              src={product.image}
              width="80"
              className="productCardImg"
            />
          </Link>
          <Card.Header>{product.name} </Card.Header>
          <Card.Footer bg="warning">
            <p>U$S {product.price}</p>
            <small className="text-muted">{product.category.name}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
