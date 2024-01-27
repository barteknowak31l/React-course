// component lifecycle demo

class App extends React.Component {
  state = {
    status: true,
  };

  constructor(props) {
    super(props);
    this.state = {};
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          Przełącz
        </button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
      </>
    );
  }
}

class Child1 extends React.Component {
  componentDidMount() {
    console.log("child componentDidMount");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  render() {
    return <div>{String(this.props.status)}</div>;
  }
}

class Child2 extends React.Component {
  componentDidMount() {
    console.log("child2 componentDidMount");
  }

  componentDidUpdate() {
    console.log("child2 componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child2 odmontowany");
  }

  render() {
    return <div>Komponent child2 zamontowany</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
