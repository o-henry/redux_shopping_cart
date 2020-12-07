import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import ProductList from "./product.list";
import AddProduct from "./product.add";
import useFetch from "hooks/useFetch";
import { actions } from "./feature";

function Product() {
  const { response } = useFetch(URL);
  const products: any = response;

  const dispatch = useDispatch();
  const handleClick = useCallback(
    e => {
      e.preventDefault();

      dispatch(
        actions.addToCart({
          name: e.currentTarget.id,
          selected: true
        })
      );
    },
    [dispatch]
  );

  return (
    <>
      <ProductList products={products}>
        <AddProduct onClick={handleClick} />
      </ProductList>
    </>
  );
}

const URL = "https://jsonplaceholder.typicode.com/albums/1/photos";

export default Product;
