import React from "react";
import { Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Product from "./Product";
import "./home.css";
import Filters from "../Filters/Filters";
import { CartState } from "../Contex/Context";

const Home = () => {
  const [products] = useProducts([]);

  const {
    productState: { searchQuery, byRating, sort },
    productDispatch,
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
      if (byRating) {
        sortedProducts = sortedProducts.filter(
          (product) => product.rating >= byRating
        );
      }
      if (searchQuery) {
        sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toString().toLowerCase().includes(searchQuery)
        );
      }
    }
    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="products-container">
        <Row xs={1} md={2} lg={3} className="g-2 ">
          {transformProducts().map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
