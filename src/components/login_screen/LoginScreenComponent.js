import React, { Component } from 'react'
import Axios from 'axios'

class LoginScreenComponent extends Component {

  state = {
    event: '',
    title: '',
    date: '',
    from: 'Some user'
  }

  handleInput = (event, inputElementKey) => {

    this.setState( {

      ...this.state,
      [inputElementKey]: event.target.value

    } )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const payloadObj = {
      event: this.state.event,
      "title": this.state.title,
      "from": this.state.from,
      "date": this.state.date
    }

    Axios.post( "http://localhost:8888/update/login", payloadObj, {
      headers: {
        'Content-Type': 'application/json'
      }
    } )
      .then( response => {
        console.log( response )

        if (response.status === 200) {
          this.props.history.push('/adjust/schedule')
        } else {
          alert('Что то пошло не так. Помолимся и еще раз?')
        }
      } )
      .catch( error =>   {
        console.log( error )
        alert('Что то пошло не так. Сервер мертв? Пнём админа и еще раз?')
      } )
  }

  render() {

    const loginPageInputForm =
      <form onSubmit={this.handleSubmit}>

        <label>
          Событие:
          <input type='text' value={this.state.text} onChange={ev => this.handleInput(ev, 'event')}/>
        </label>

        <label>
          Название:
          <input type='text' value={this.state.text} onChange={ev => this.handleInput(ev, 'title')}/>
        </label>

        <label>
          Дата:
          <input type='text' value={this.state.text} onChange={ev => this.handleInput(ev, 'date')}/>
        </label>

        <input type='submit' value='Submit'/>
      </form>

    return (
      <div>
        <h3>Мобильное приложение: Страница авторизации</h3>
        {loginPageInputForm}
      </div>
    )
  }
}

export default LoginScreenComponent