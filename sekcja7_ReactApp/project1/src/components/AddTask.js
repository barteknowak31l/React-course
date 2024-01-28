import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };

  minDate = new Date().toISOString().slice(0, 10);

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({ checked: e.target.checked });
  };

  handleClick = (e) => {
    const { text, checked, date } = this.state;

    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({ text: "", checked: false, date: this.minDate });
      }
    } else {
      alert("za krótka nazwa");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <input
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        ></input>
        <input
          type="checkbox"
          id="important"
          checked={this.state.checked}
          onChange={this.handleCheckbox}
        ></input>
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          type="date"
          id="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        ></input>
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
