class FortuneTeller extends React.Component {
  state = {
    currentFortune: "",
    newFortune: "",

    fortunes: [
      {
        id: 1,
        text: "Wróżba nr 1",
      },
      {
        id: 2,
        text: "Wróżba nr 2",
      },
      {
        id: 3,
        text: "Wróżba nr 3",
      },
    ],
  };

  handleClick = () => {
    const { fortunes } = this.state;
    const number = Math.floor(Math.random() * fortunes.length) + 1;
    const chosenFortune = fortunes.filter((fortune) => fortune.id === number);
    const txt = chosenFortune[0].text;
    this.setState({
      currentFortune: txt,
    });
  };

  handleNewFortune = (e) => {
    this.setState({
      newFortune: e.target.value,
    });
  };

  handleAddFortune = () => {
    const newID = this.state.fortunes.length + 1;
    const newText = this.state.newFortune;

    const newFortune = {
      id: newID,
      text: newText,
    };

    this.setState({
      fortunes: [...this.state.fortunes, newFortune],
      newFortune: "",
      currentFortune: "",
    });
  };

  render() {
    const { currentFortune } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>Zobacz wróżbę</button>
        <br />
        <label>
          <input
            type="text"
            value={this.state.newFortune}
            onChange={this.handleNewFortune}
          ></input>
          <button onClick={this.handleAddFortune}>Dodaj nową wróżbę</button>
        </label>
        <h1>{currentFortune}</h1>
      </>
    );
  }
}

ReactDOM.render(<FortuneTeller />, document.getElementById("root"));
