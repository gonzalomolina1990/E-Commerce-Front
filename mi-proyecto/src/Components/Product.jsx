import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Navigation from "./Navigation";
import CardGroup from "react-bootstrap/CardGroup";
import { useParams } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = React.useState("");
  const params = useParams();

  React.useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v1/product/${params.slug}`
      );

      setProduct(response.data);
      console.log(response.data);
    };
    getProduct();
  }, []);

  return (
    <>
      <Navigation />
      <CardGroup className="mt-5">
        <Card className="mb-4 productCard">
          <Card.Header>{product.name} </Card.Header>
          <Card.Img variant="top" src={product.image} width="100" />
          <Card.Body>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {product.category && product.category.name}
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
