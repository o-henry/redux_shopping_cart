import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import ProductList from "./product.list";
import useFetch from "hooks/useFetch";
import { actions } from "./feature";

function Product() {
  const { response } = useFetch(URL);
  const products: any = response;

  const dispatch = useDispatch();
  const handleClick = useCallback(
    thumbnailUrl => {
      dispatch(
        actions.addToCart({
          thumbnailUrl: thumbnailUrl,
          selected: true
        })
      );
    },
    [dispatch]
  );

  return (
    <>
      <ProductList products={products} onClick={handleClick} />
    </>
  );
}

const URL = "https://jsonplaceholder.typicode.com/albums/1/photos";

export default Product;
