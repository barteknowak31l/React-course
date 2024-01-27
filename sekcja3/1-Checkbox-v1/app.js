//const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy</p>;
//const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
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

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy" />;
      } else {
        return <ValidationMessage txt="Nie możesz obejrzeć tego filmu." />;
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <>
        <h1>Kub bilet na horror roku!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={this.state.isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

const OrderForm = (props) => {
  const { submit, checked, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" onChange={change} id="age" checked={checked} />
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <br />
      <button type="submit">Kup Bilet</button>
    </form>
  );
};

ReactDOM.render(<TicketShop />, document.getElementById("root"));
