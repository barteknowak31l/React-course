const Item = ({ content }) => (
  <div>
    <h1>Użytkownik: {content.name}</h1>
    <h2>ma: {content.age} lat(a)</h2>
  </div>
);

const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
    },
    {
      id: 2,
      age: 39,
      name: "Darek",
    },
    {
      id: 3,
      age: 49,
      name: "Marek",
    },
  ],
};

class ListItems extends React.Component {
  render() {
    const users = this.props.data.users;
    const items = users.map((user) => <Item key={user.id} content={user} />);

    return (
      <>
        <ul>{items}</ul>
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
