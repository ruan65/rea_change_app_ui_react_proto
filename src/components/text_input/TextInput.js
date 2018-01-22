import React, { Component } from 'react'
import Axios from 'axios'

class TextInput extends Component {

  state = {
    title: '',
    text: ''
  }

  handleTextInput = (event) => {

    this.setState( {

      ...this.state,
      text: event.target.value

    } )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // alert( "Submitted text: " + this.state.text )

    Axios.post( "http://localhost:8888/update/title", { "text": this.state.text, "from": "Batman" }, {
      headers: {
        'Content-Type': 'application/json'
      }
    } )
      .then( response => {
        console.log( response.data )
      } )
      .catch( error => console.log( error ) )
  }

  render() {

    const textInputForm =
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type='text' value={this.state.text} onChange={ev => this.handleTextInput(ev)}/>
        </label>

        <input type='submit' value='Submit'/>
      </form>

    return (
      <div>
        {textInputForm}
      </div>
    )
  }
}

export default TextInput