class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
  };

  handleClick(type, number = 1) {
    if (type === "sub") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: 0,
      }));
    } else if (type === "add") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this, "sub", 10)}>-10</button>
        <button onClick={() => this.handleClick("sub")}>-1</button>
        <button onClick={this.handleClick.bind(this, "reset")}>Reset</button>
        <button onClick={() => this.handleClick("add")}>+1</button>
        <button onClick={this.handleClick.bind(this, "add", 10)}>+10</button>
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

ReactDOM.render(<Counter result={0} />, document.getElementById("root"));
