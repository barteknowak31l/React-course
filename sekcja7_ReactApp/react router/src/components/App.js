import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt</h1>;
const ErrorPage = () => <h1>Strona nie istnieje</h1>;

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Start</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Aktualności</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Kontakt</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
