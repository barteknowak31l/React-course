import React from "react";
import "./Word.css";

const Word = (props) => (
  <li>
    Eng:<strong>{props.english}</strong>
    <br /> Tłumaczenie: <strong>{props.polish}</strong>
  </li>
);

export default Word;
