import React, { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Contex/Context";


const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <Container
      fluid
      
      className="home"
    >
      
       
          <div className="products-container ">
            <ListGroup>
              {cart.map((product) => (
                <ListGroupItem>
                  <Row>
                    <Col><img src={product.image} style={{width:50,height:50}} alt="pImage" /></Col>
                    <Col>{product.title }</Col>
                    <Col>{product.price }</Col>
                   <Col> <AiFillDelete
                        style={{ cursor: "pointer", fontSize: 20 }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      /></Col>
                  </Row>
               
                </ListGroupItem>
              ))}
            
            </ListGroup>
          </div>
       
        
          <div className="filters summary ">
            <span className="title">Subtotal ({cart.length}) items</span>
            <span >Total: $ {total} </span>
            <Button className="my-5 mx-4 px-4">CheckOut</Button>
          </div>
      
      
    </Container>
  );
};

export default Cart;
