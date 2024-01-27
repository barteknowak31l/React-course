class ListItems extends React.Component {
  state = {
    items: ["kaczka", "dżem", "ogórek"],
  };

  render() {
    return (
      <>
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>{`item: ${item}`}</li>
          ))}
        </ul>
      </>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
