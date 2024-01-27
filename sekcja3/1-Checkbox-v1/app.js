class App extends React.Component {
  state = {
    active: true,
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <>
        <SwitchButton active={this.state.active} click={this.handleClick} />
        {this.state.active && <Counter />}
      </>
    );
  }
}

const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? "wyłącz" : "włącz"}</button>
);

class Counter extends React.Component {
  state = {
    time: this.getTime(),
  };

  intervalIndex = "";

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }

  setTime = () => {
    const time = this.getTime();
    this.setState({
      time: time,
    });
  };

  componentWillUnmount() {
    clearInterval(this.intervalIndex);
  }

  componentDidMount() {
    this.intervalIndex = setInterval(() => this.setTime(), 1000);
  }

  render() {
    const { hours: h, minutes: m, seconds: s } = this.state.time;
    return (
      <div>
        {h > 9 ? h : `0${h}`}:{m > 9 ? m : `0${m}`}:{s > 9 ? s : `0${s}`}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
