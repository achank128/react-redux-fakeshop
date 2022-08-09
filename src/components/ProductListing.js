import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { productAction } from "../redux/actions";
import { allProductsSelector } from "../redux/selectors";

const ProductPage = () => {
  const products = useSelector(allProductsSelector);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(productAction.setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      {products ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

export default ProductPage;
