// kantor demo

// const Dollars = (props) => {
//   const value = (props.cash / props.ratio).toFixed(2);
//   return <div>Wartość w Dolarach: {props.cash <= 0 ? " " : value}</div>;
// };
// const Euros = (props) => {
//   const value = (props.cash / props.ratio).toFixed(2);
//   return <div>Wartość w Euro: {props.cash <= 0 ? " " : value}</div>;
// };

const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? " " : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };

  currencies = [
    {
      id: 1,
      name: "dolar",
      ratio: "3.6",
      title: "Wartość w dolarach: ",
    },
    {
      id: 2,
      name: "euro",
      ratio: "4.2",
      title: "Wartość w euro: ",
    },
    {
      id: 3,
      name: "pound",
      ratio: "4.55",
      title: "Wartość w funtach: ",
    },
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount, ratioDollar, ratioEuro } = this.state;

    const calculators = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));

    return (
      <div className="app">
        <label>
          <input
            type="Number"
            value={this.state.amount}
            onChange={this.handleChange}
          ></input>
          {calculators}
        </label>
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
