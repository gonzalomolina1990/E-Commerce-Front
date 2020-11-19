import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <CardGroup>
        <Card border="light" className="mb-4 productCard">
          <Card.Header>{product.name} </Card.Header>
          <Link className="cardLink" to={`/product/${product.slug}`}>
            <Card.Img variant="top" src={product.image} width="100" />
            <Card.Body>
              <Card.Text className="module">{product.description}</Card.Text>
            </Card.Body>
          </Link>
          <Card.Footer>
            <small className="text-muted">{product.category.name}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
