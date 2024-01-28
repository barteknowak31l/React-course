import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  const { id } = useParams();
  return (
    <>
      <div>Strona produktu</div>
      <Product id={id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
