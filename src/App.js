import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  async componentDidMount() {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await users.json();
    this.setState({ monsters: users });
  }

  render() {
    return (
      <div className="App">
        <h1>Mnsters Roledex</h1>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
