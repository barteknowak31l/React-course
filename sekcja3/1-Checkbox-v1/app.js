const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    } else {
      return null;
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  render() {
    return (
      <>
        <h1>Kub bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            onChange={this.handleCheckboxChange}
            id="age"
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup Bilet</button>
          {this.displayMessage()}
        </form>
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
