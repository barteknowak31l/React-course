//const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy</p>;
//const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy" />;
    } else {
      return <ValidationMessage txt="Nie możesz obejrzeć tego filmu." />;
    }
  } else {
    return null;
  }
};

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

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;

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
          {displayMessage(isConfirmed, isFormSubmitted)}
        </form>
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
