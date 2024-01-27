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

  render() {
    return (
      <>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span> {this.state.shoppingCart} </span>
        <button
          disabled={this.state.shoppingCart >= this.state.availbleProducts}
          onClick={this.addToCart}
        >
          +
        </button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
