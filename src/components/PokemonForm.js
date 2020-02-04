import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form id='pokemon-form' onSubmit={() => this.props.handleSubmit(this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.updateState}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp"  onChange={this.updateState}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.updateState}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.updateState}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
