import React, { Component } from 'react';
import pokemon from "./pokemon.json";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import PokeCard from "./components/PokeCard";

class App extends Component {
  state = {
    topScore: 0,
    currentScore: 0,
    message: "Click one to begin!",
    pokemon: pokemon,
    clicked: []
  }

  randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  catchIt = type => {
    const catchPokemon = this.state.clicked.indexOf(type);
    const playerCurrentScore = this.state.currentScore;
    console.log(playerCurrentScore);
    if (playerCurrentScore === 11) {
      this.setState({
        topScore: 12,
        currentScore: 0,
        pokemon: pokemon,
        message: "Congrats! You caught them all!",
        clicked: []
      })
    }
    else if (catchPokemon !== -1) {
      this.setState({
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        pokemon: pokemon,
        message: "You already caught that one! Too bad :(",
        clicked: []
      });
    }
    else {
      const caughtPokemon = type;
      console.log(caughtPokemon);
        this.setState({
          currentScore: this.state.currentScore + 1,
          pokemon: pokemon,
          message: "You guessed correctly!",
          clicked: this.state.clicked.concat(type)
        });
      }
    this.randomize(pokemon);
    console.log(this.state.currentScore);
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        {
          this.state.pokemon.map(pokemon => (
            <PokeCard
              type={pokemon.type}
              image={pokemon.image}
              catchIt={this.catchIt}
              score={this.currentScore}
            />
          ))
        }
      </Wrapper>
    );
  }

}

export default App;


