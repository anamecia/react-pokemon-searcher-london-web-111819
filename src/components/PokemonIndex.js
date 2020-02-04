import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const pokemonUrl = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemonList: [],
    searchTerm: ''
  }

  getPokemon = (url) => {
    return fetch(url).then(resp => resp.json())
  }

  componentDidMount = () => {
    this.getPokemon(pokemonUrl)
    .then (list => this.setState({pokemonList: list}))
  }

  updateSearchTerm = (e) =>{
    this.setState({
      searchTerm: e.target.value 
    })
  }

  handleSubmit = (newPokemon) => {
    const bodyObj={
      name: newPokemon.name,
      stats: [{
        name:'hp',
        value:newPokemon.hp
      }],
      sprites:{
        front: newPokemon.fronUrl,
        back: newPokemon.backUrl
      }
      
    }
    fetch(pokemonUrl,{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(bodyObj)
    }).then(() => this.setState({
      pokemonList: [...this.state.pokemonList, bodyObj]
    }) 
    )
    document.getElementById('pokemon-form').reset()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search updateSearchTerm={this.updateSearchTerm} onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection  pokemonList={this.state.pokemonList} searchTerm={this.state.searchTerm}/>
      </Container>
    )
  }
}

export default PokemonPage
