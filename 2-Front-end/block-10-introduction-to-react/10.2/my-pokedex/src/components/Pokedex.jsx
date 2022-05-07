import { Component } from "react";
import Pokemon from './Pokemon';


class Pokedex extends Component {
  render() {
    const { list } = this.props;
    const pokemonList = list.map((pokemonData) => (
      <li className="card" key={pokemonData.id}>
        <Pokemon data={pokemonData} />
      </li>
    ))

    return (
      <ul>
        {pokemonList}
      </ul>
    )
  }
}

export default Pokedex