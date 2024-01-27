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
        {h}:{m}:{s}
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
