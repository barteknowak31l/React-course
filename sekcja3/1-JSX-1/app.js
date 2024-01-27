class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
  };

  handleClick = (type, number = 1) => {
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
  };

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number="10"
          type="sub"
          click={this.handleClick}
        />
        <MathButton name="-1" number="1" type="sub" click={this.handleClick} />
        <MathButton
          name="reset"
          number=""
          type="reset"
          click={this.handleClick}
        />
        <MathButton name="+1" number="1" type="add" click={this.handleClick} />
        <MathButton
          name="+10"
          number="10"
          type="add"
          click={this.handleClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number);
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = (props) => {
  return (
    <>
      <h1>
        Liczba kliknięć: {props.count}{" "}
        {props.count > 10 ? <span>MESSAGE</span> : null}
      </h1>
      <h1>Wynik: {props.result}</h1>
    </>
  );
};

ReactDOM.render(<Counter result={0} />, document.getElementById("root"));
