import React, { Component } from 'react'
import Axios from "axios/index";

class ScheduleScreenComponent extends Component {

  state = {
    schedule: ''
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
      schedule: this.state.schedule
    }

    Axios.post( "http://localhost:8888/update/schedule", payloadObj, {
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
          Расписание мероприятия:
          <textarea rows="4" cols="50" value={this.state.text} onChange={ev => this.handleInput(ev, 'schedule')}/>
        </label>

        <input type='submit' value='Submit'/>
      </form>

    return (
      <div>
        <h3>Мобильное приложение: Расписание мероприятия</h3>
        {loginPageInputForm}
      </div>
    )
  }
}

export default ScheduleScreenComponent