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
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? " " : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "gas",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "zloty",
        ratio: "1.0",
        title: "Wartość w złotówkach: ",
      },
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
    ],

    prices: {
      electricity: 0.51,
      gas: 4.76,
      oranges: 3.79,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleProductChange = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    });
  };

  insertSuffix = (select) => {
    if (select === "electricity") return <em>kWh</em>;
    else if (select === "gas") return <em>litrów</em>;
    else if (select === "oranges") return <em>kg</em>;
    else return null;
  };

  selectPrice = (product) => {
    return this.props.prices[product];
  };

  render() {
    const { amount, product } = this.state;
    const price = this.selectPrice(product);

    const calculators = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={price}
      />
    ));

    return (
      <div className="app">
        <label>
          Wybierz produkt
          <select value={product} onChange={this.handleProductChange}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges"> pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="Number"
            value={this.state.amount}
            onChange={this.handleChange}
          ></input>
          {this.insertSuffix(product)}
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
