// projekt:  wirtuale menu restauracji
// użycie osobnych plików .js dla osobnych komponentów

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "kaczka", active: true },
      { id: 2, name: "ogórek", active: false },
      { id: 3, name: "pomidor", active: false },
      { id: 4, name: "dżem", active: false },
      { id: 5, name: "chleb", active: false },
      { id: 6, name: "herbata", active: true },
    ],
  };

  handleChangeStatus = (id) => {
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });

    this.setState({
      items,
    });
  };

  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </>
    );
  }
}
