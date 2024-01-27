class App extends React.Component {
  state = {
    value: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.value}
          placeholder="wpisz..."
          onChange={this.handleInputChange}
          type="text"
        ></input>
        <button onClick={this.handleClick}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
