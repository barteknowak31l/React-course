// form demo
class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLoved: true,
    numerOfVisits: 0,
  };

  handleOnCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleOnTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleIsLoved = (e) => {
    this.setState({
      isLoved: e.target.checked,
    });
  };

  onVisitNumberChanged(e) {
    this.setState({
      numerOfVisits: e.target.value,
    });
  }

  render() {
    return (
      <>
        <div>
          <label>
            Podaj miasto
            <input
              type="text"
              onChange={this.handleOnCityChange}
              value={this.state.city}
            ></input>
          </label>
          <br />
          <label>
            Napisz coś o tym mieście
            <textarea
              value={this.state.text}
              onChange={this.handleOnTextChange}
            ></textarea>
          </label>
          <br />
          <label>
            Czy lubisz to miasto?
            <input
              type="checkbox"
              checked={this.state.isLoved}
              onChange={this.handleIsLoved}
            />
          </label>
          <br />
          <label>
            Ile razy byliście w tym mieście?
            <select
              value={this.state.numerOfVisits}
              onChange={this.onVisitNumberChanged.bind(this)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="more">więcej</option>
            </select>
          </label>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
