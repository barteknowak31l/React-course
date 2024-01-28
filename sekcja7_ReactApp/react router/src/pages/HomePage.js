import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Wiedźmin 3 najlepszy",
    author: "Łysy z tvgry",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget nunc scelerisque viverra. Placerat",
  },

  {
    id: 2,
    title: "Pizza z dżemem - rewolucja, czy szaleństwo?",
    author: "Student informatyki",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget nunc scelerisque viverra. Placerat",
  },

  {
    id: 3,
    title: "Dlaczego kaczki podbijają świat?",
    author: "DannyTheDuck",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet venenatis urna cursus eget nunc scelerisque viverra. Placerat",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
