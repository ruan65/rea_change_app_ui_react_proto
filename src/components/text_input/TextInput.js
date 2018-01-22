import React, { Component } from 'react'
import Axios from 'axios'

class TextInput extends Component {

  state = {
    title: '',
    date: '',
    from: 'Some user'
  }

  handleTitleInput = (event) => {

    this.setState( {

      ...this.state,
      title: event.target.value

    } )
  }

  handleDateInput = (event) => {

    this.setState( {

      ...this.state,
      date: event.target.value

    } )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const payloadObj = {
      "title": this.state.title,
      "from": this.state.from,
      "date": this.state.date
    }

    Axios.post( "http://localhost:8888/update/title", payloadObj, {
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
          Название:
          <input type='text' value={this.state.text} onChange={ev => this.handleTitleInput(ev)}/>
        </label>

        <label>
          Дата:
          <input type='text' value={this.state.text} onChange={ev => this.handleDateInput(ev)}/>
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