const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

class CheckboxAge extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMessage />;
    }
  };

  render() {
    return (
      <>
        <h1>Kub bilet na horror roku!</h1>
        <input
          type="checkbox"
          onChange={this.handleCheckboxChange}
          id="age"
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAge />, document.getElementById("root"));
