import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import './App.css';
import LoginScreenComponent from './components/login_screen/LognScreenComponent'
import ScheduleScreenComponent from './components/schedule_screen/ScheduleScreenComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/adjust/login' component={LoginScreenComponent}/>
          <Route path='/adjust/schedule' component={ScheduleScreenComponent}/>
          <Route path='/' component={LoginScreenComponent}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
