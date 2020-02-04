import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  filterPokemon = () => {
    return this.props.pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.searchTerm !== ''
          ?this.filterPokemon().map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
          :this.props.pokemonList.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
