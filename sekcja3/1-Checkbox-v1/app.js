const Item = (props) => <li>{`item: ${props.content}`}</li>;

class ListItems extends React.Component {
  state = {
    items: ["kaczka", "dżem", "ogórek"],
  };

  render() {
    const items = this.state.items.map((item) => (
      <Item key={item} content={item} />
    ));

    return (
      <>
        <ul>{items}</ul>
      </>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
