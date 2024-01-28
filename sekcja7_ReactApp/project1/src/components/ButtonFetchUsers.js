import React from "react";

const ButtonFetchUsers = (props) => {
  return (
    <button
      onClick={props.click}
      style={{
        padding: "10px 20px",
        border: "2px solid black",
        backgroundColor: "white",
        margin: "20px",
      }}
    >
      Dodaj użytkownika
    </button>
  );
};

export default ButtonFetchUsers;
