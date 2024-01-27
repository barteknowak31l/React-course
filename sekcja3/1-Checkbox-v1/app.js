const Item = ({ content }) => (
  <div>
    <h1>Użytkownik: {content.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>ma: {content.age} lat(a)</p>
    <p>płeć: {content.sex}</p>
  </div>
);

const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 39,
      name: "Darek",
      sex: "male",
    },
    {
      id: 3,
      age: 49,
      name: "Marek",
      sex: "male",
    },
    {
      id: 4,
      age: 19,
      name: "Marta",
      sex: "female",
    },
  ],
};

class ListItems extends React.Component {
  state = { sex: "none" };

  usersList = () => {
    let users = this.props.data.users;

    switch (this.state.sex) {
      case "none":
        return users.map((user) => <Item key={user.id} content={user} />);
      case "male":
        users = users.filter((user) => user.sex === this.state.sex);
        return users.map((user) => <Item key={user.id} content={user} />);
      case "female":
        users = users.filter((user) => user.sex === this.state.sex);
        return users.map((user) => <Item key={user.id} content={user} />);
    }

    users = users.map((user) => <Item key={user.id} content={user} />);
    return users;
  };

  handleClick = (s) => {
    this.setState({
      sex: s,
    });
  };

  render() {
    return (
      <>
        <button onClick={() => this.handleClick("none")}>Wszyscy</button>
        <button onClick={() => this.handleClick("female")}>Kobiety</button>
        <button onClick={() => this.handleClick("male")}>Mężczyźni</button>
        {this.usersList()}
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
