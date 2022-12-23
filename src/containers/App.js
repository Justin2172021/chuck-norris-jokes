import React, { Component } from "react";
import "./App.css"
import JokeCard from "../components/JokeCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: "Chuck Norris was NOT born he willed himself into exsistance."
    }
    this.onClick = this.onClick.bind(this);
  }

  async onClick(e) {
    e.preventDefault();
    const response = await fetch("https://api.chucknorris.io/jokes/random?category=animal,career,celebrity,dev,fashion,food,history,money,movie,music,political,religion,science,sport,travel");
    const data = await response.json();
    this.setState({ quote: data.value });
  }

  render() {
    return (
      <>
        <h1>Chuck Norris Facts</h1>
        <h2>Fact Box</h2>
        <JokeCard quote={this.state.quote} />
        <button onClick={this.onClick}>Get New Fact</button>
      </>
    );
  }
}

export default App;
