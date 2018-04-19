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
    console.log(catchPokemon);
    if (catchPokemon !== -1) {
      this.setState({
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        pokemon: pokemon,
        clicked: []
      });
    }
    else {
      const caughtPokemon = type;
      console.log(caughtPokemon);
      this.setState({
        currentScore: this.state.currentScore + 1,
        pokemon: pokemon,
        clicked: this.state.clicked.concat(type)
      });
    }
    this.randomize(pokemon);
  }

  render() {
    return (
      <Wrapper>
        <NavBar
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
              />
          ))
        }
      </Wrapper>
    );
  }

}

export default App;


