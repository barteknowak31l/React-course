// po kliknięciu przycisku dodawana jest losowa liczba (0-10)

class App extends React.Component {
  constructor(props) {
    super(props);

    // w state przechowujemy rzeczy, ktore sie beda zmieniac
    this.state = {
      text: "",
    };
  }

  // metoda z prototypu (trzeba ją zbindować dla każdego obiektu)
  // można w konstruktorze, można przy każdym wywołaniu, można użyć funkcji strzałkowej (dziedziczy this po elemencie nadrzeędnym)
  buttonHandle = () => {
    const number = Math.floor(Math.random() * 10);
    // this.setState({
    //   text: this.state.text + letter,
    // });

    this.setState(() => ({
      text: this.state.text + number,
    }));
  };

  render() {
    const btnName = "Stworz liczbe"; // tu tez mozna definiowac zmienne
    return (
      <>
        <button onClick={this.buttonHandle}>{this.props.btnTitle}</button>
        <ResultPanel text={this.state.text}>To jest child</ResultPanel>
      </>
    );
  }
}

const ResultPanel = (props) => {
  return (
    <h1>
      {props.text}:{props.children}
    </h1>
  );
};

ReactDOM.render(
  <App btnTitle="Dodaj cyfre" />,
  document.getElementById("root")
);
