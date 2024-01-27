// po kliknięciu przycisku dodawana jest litera do tekstu

class App extends React.Component {
  state = {
    text: "",
  };

  buttonHandle = () => {
    const letter = "a";
    this.setState({
      text: this.state.text + letter,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.buttonHandle}>Dodaj A</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
