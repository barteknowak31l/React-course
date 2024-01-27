class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageIsActive: false,
    };

    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }

  render() {
    const text = "Lorem ipsum";
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
