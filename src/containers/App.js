import React, { Component } from "react";
import "./App.css"
import JokeCard from "../components/JokeCard";

class App extends Component {
  render() {
    return (
      <>
        <h1>Chuck Norris Facts</h1>
        <h2>Fact Box</h2>
        <JokeCard />
        <button>Get New Fact</button>
      </>
    )
  }
}

export default App;
