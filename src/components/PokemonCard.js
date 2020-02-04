import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    displayFrontImg: true 
  }

  handleClick = () => {
    this.setState({
      displayFrontImg: !this.state.displayFrontImg
    })
  }

  render() {
   
    const hpValue = this.props.pokemon.stats.find(element => element.name === "hp")
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} alt="oh no!" src={this.state.displayFrontImg ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpValue.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
