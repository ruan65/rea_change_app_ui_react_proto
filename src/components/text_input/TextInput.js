import React, { Component } from 'react'

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
    alert( "Submitted text: " + this.state.text )
  }

  render() {

    const textInputForm =
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type='text' value={this.state.text} onChange={this.handleTextInput}/>
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