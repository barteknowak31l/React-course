import React from "react";
import "../styles/ContactPage.css";

class ContactPage extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            placeholder="Wpisz wiadomość..."
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
