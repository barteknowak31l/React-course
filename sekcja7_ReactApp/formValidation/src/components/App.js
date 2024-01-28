// AJAX demo

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    },

    message: "",
  };

  messages = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Brak @ w emailu",
    password_incorrect: "Hasło musi mieć co najmniej 8 znaków",
    accept_incorrect: "Musisz wyrazić zgodę na regulamin",
  };

  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;

    if (type === "checkbox" || type === "radio") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    } else {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    }
  };

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.pass.length >= 8) {
      password = true;
    }
    if (this.state.accept === true) {
      accept = true;
    }

    if (username && email && password && accept) {
      correct = true;
    }

    return {
      correct,
      username,
      email,
      password,
      accept,
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();
    console.log(validation);

    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        pass: "",
        accept: false,
        message: "Formularz został wysłany",

        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        },
      });
    }
  };

  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(() => this.setState({ message: "" }), 3000);
    }
  }

  render() {
    const {
      username: usernameError,
      password: passwordError,
      email: emailError,
      accept: acceptError,
    } = this.state.errors;
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Imię
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
            {usernameError && <span>{this.messages.username_incorrect}</span>}
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            {emailError && <span>{this.messages.email_incorrect}</span>}
          </label>

          <label htmlFor="password">
            Hasło
            <input
              type="password"
              id="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            ></input>
            {passwordError && <span>{this.messages.password_incorrect}</span>}
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            Wyrażam zgodę na regulamin
          </label>
          {acceptError && <span>{this.messages.accept_incorrect}</span>}

          <button>Zapisz się</button>
        </form>

        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default App;
