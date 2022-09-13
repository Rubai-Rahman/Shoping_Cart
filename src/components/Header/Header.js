import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Contex/Context";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { cart },
    dispatch,productDispatch,
  } = CartState();

  const CartTitleStyle = {
    width: 20,
    overflow: "hidden",
    textOverflow: "hidden",
    whiteSpace: "nowrap",
    margin: 10,
  };
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a href="/">Shopping Cart</a>
        </Navbar.Brand>
        <Navbar.Text>
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="m-auto"
            onChange={(e)=> productDispatch({
              type:"FILTER_BY_SEARCH",
              payload: e.target.value,
            })}
            style={{ width: 350 }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown >
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu
              align="end"
              style={{
                minWidth: 370,
                height: 500,
                overflow: "scroll",
                paddingLeft: 30,
                marginTop: 20,
              }}
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((product) => (
                    <span className="cartItem">
                      <img className="cartItemImg" src={product.image} alt="" />
                      <div className="cartItemDetails">
                        <span style={CartTitleStyle}>{product.title}</span>
                        <span style={{ margin: 10, color: "green" }}>
                          ${product.price}
                        </span>
                      </div>
                      <AiFillDelete
                        style={{ cursor: "pointer", fontSize: 20 }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button>Go To Cart</Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}> Cart is Empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
