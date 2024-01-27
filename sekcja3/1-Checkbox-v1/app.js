// rozszerzenie poprzedniego projektu o przycisk 'kup'

class App extends React.Component {
  state = {
    availbleProducts: 7,
    shoppingCart: 0,
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };

  addToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };

  handleBuy = () => {
    this.setState({
      shoppingCart: 0,
      availbleProducts: this.state.availbleProducts - this.state.shoppingCart,
    });
  };

  render() {
    const style =
      this.state.shoppingCart === 0
        ? {
            opacity: 0.3,
          }
        : {};

    const { shoppingCart, availbleProducts } = this.state;

    return (
      <>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span style={style}> {shoppingCart} </span>
        <button
          disabled={shoppingCart >= availbleProducts}
          onClick={this.addToCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
