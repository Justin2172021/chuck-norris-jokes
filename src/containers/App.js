import React, { Component } from "react";
import "./App.css"
import JokeCard from "../components/JokeCard";

class App extends Component {
  render() {
    return (
      <>
        <h1>Chuck Norris Jokes</h1>
        <JokeCard />
        <button>Get New Joke</button>
      </>
    )
  }
}

export default App;
