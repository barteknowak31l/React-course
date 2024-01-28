import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import "../styles/Header.css";

import { Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Img src={img1} alt="landscape" />} />
        <Route path="/contact" element={<Img src={img2} alt="landscape" />} />
        <Route path="/admin" element={<Img src={img3} alt="landscape" />} />
        <Route path="*" element={<Img src={img3} alt="landscape" />} />
      </Routes>
    </>
  );
};

const Img = (props) => <img src={props.src} alt={props.alt}></img>;

export default Header;
