const Person = (props) => {
  return (
    <li>
      {props.name} <button onClick={() => props.click(props.id)}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    persons: [
      {
        id: 0,
        name: "Jan K.",
      },
      {
        id: 1,
        name: "Piotr C.",
      },
      {
        id: 2,
        name: "Marysia W.",
      },
      {
        id: 3,
        name: "John S.",
      },
    ],
  };

  handleClick = (id) => {
    const newList = this.state.persons.filter((person) => person.id != id);

    this.setState({
      persons: newList,
    });
  };

  render() {
    const list = this.state.persons.map((person) => (
      <Person
        key={person.id}
        id={person.id}
        name={person.name}
        click={this.handleClick}
      />
    ));
    return (
      <>
        <ul>{list}</ul>
      </>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
