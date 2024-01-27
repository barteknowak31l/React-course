class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageIsActive: false,
    };

    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  // użycie setState jako funkji strzełkowej pozwala na poprawne
  // obsłguiwanie asynchroniczności
  handleMessageButton() {
    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive,
    }));
  }

  render() {
    const text = "Lorem ipsum";
    debugger;
    return (
      <>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? "Ukryj" : "Pokaż"}
        </button>
        {this.state.messageIsActive ? <p>{text}</p> : null}
        {this.state.messageIsActive && <p>{text}</p>}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
