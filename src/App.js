import React, { Component } from 'react';
import './App.css';
import TextInput from './components/text_input/TextInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextInput/>
      </div>
    );
  }
}

export default App;
