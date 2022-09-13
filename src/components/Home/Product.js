import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { CartState } from "../Contex/Context";

const Product = ({ product }) => {
  const { image, title, price,rating } = product;
  const titleStyle = {
    width: 220,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Container style={{ width: "30%", margin: 10 }}>
      <Card className=" shadow-lg p-3 mb-5  rounded">
        <Card.Img
          variant="top"
          style={{ width: 200, height: 250, marginLeft: 30 }}
          src={image}
        />
        <Card.Body>
          <Card.Title className="Card-title" style={titleStyle}>
            {title}
          </Card.Title>
          <Card.Text>
            price: $:{price} <br />
          </Card.Text>
          <Card.Text>
            rating: :{rating?.rate} <br />
          </Card.Text>
          {cart.some((p) => p.id === product.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                });
              }}
              style={{ backgroundColor: "red" }}
            >
              Remove Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
              style={{ margin: 3 }}
            >
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Product;
