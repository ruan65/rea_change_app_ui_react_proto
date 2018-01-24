import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import LoginScreenComponent from './components/login_screen/LoginScreenComponent'
import ScheduleScreenComponent from './components/schedule_screen/ScheduleScreenComponent'
import DownloadAppApkComponent from './components/download_apk/downloadApk'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/adjust/login' component={LoginScreenComponent}/>
          <Route path='/adjust/schedule' component={ScheduleScreenComponent}/>
          <Route path='/download/apk' component={DownloadAppApkComponent}/>
          <Route path='/' component={LoginScreenComponent}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter( App );
