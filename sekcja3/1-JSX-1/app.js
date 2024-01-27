// po kliknięciu przycisku dodawana jest litera do tekstu

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.buttonHandle = this.buttonHandle.bind(this);
  }

  // metoda z prototypu (trzeba ją zbindować dla każdego obiektu)
  // można w konstruktorze, można przy każdym wywołaniu, można użyć funkcji strzałkowej (dziedziczy this po elemencie nadrzeędnym)
  buttonHandle() {
    const letter = "a";
    // this.setState({
    //   text: this.state.text + letter,
    // });

    this.setState(() => ({
      text: this.state.text + letter,
    }));
  }

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
