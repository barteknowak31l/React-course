// Komponenty

// funkcyjny - bezstanowy
const Header = () => {
  return (
    <div>
      <h1>Witaj na stronie!</h1>
    </div>
  );
};

// klasowy - stanowy
class Blog extends React.Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <section>
        <h2>Artykuł {this.state.number}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          ornare massa eget egestas. Nullam non nisi est sit amet facilisis
          magna. Dui vivamus arcu felis bibendum ut tristique et egestas quis.
          Id porta nibh venenatis cras sed felis. Sit amet facilisis magna etiam
          tempor orci. Nulla at volutpat diam ut venenatis tellus in metus.
          Elementum tempus egestas sed sed risus pretium. Etiam erat velit
          scelerisque in dictum. Dolor morbi non arcu risus quis varius quam
          quisque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
          vivamus at augue. Erat velit scelerisque in dictum non. Rhoncus dolor
          purus non enim praesent. Quisque non tellus orci ac auctor. Pharetra
          et ultrices neque ornare aenean euismod elementum. Vitae sapien
          pellentesque habitant morbi tristique senectus.
        </p>
      </section>
    );
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
