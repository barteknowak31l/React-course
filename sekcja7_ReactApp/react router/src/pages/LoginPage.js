import React from "react";
const LoginPage = () => {
  return (
    <>
      <label htmlFor="">
        Podaj login
        <input type="text" />
      </label>
      <br />
      <label htmlFor="">
        Podaj hasło
        <input type="password" />
      </label>
      <br />
      <button>Zaloguj</button>
    </>
  );
};

export default LoginPage;
