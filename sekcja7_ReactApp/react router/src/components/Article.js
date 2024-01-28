import React from "react";

const styles = {
  marginTop: 40,
};
const spanStyles = {
  display: "block",
  marginBottom: 10,
  fontSize: 12,
};

const pStyles = {
  fontSize: 15,
};

const Article = ({ title, author, text }) => {
  return (
    <article style={styles}>
      <h3>{title}</h3>
      <span style={spanStyles}>
        <em>{author}</em>
      </span>
      <p style={pStyles}>{text}</p>
    </article>
  );
};

export default Article;
