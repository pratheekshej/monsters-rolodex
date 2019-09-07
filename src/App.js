import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      val: 'Pratheeksh E J'
    };
  }

  transformVal = {
    val: 'Pratheeksh E J'
  };

  setValue(value) {
    this.transformVal.val = value.val;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey This is { this.state.val }
          </p>
          <button onClick={() => this.setState({val: 'P E J'})}>TRANSFORM</button>
        </header>
      </div>
    );
  }

}

export default App;
