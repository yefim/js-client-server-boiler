import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {n: ''};
  }

  async double() {
    if (this.state.n === '') {
      return;
    }

    const res = await fetch(`http://localhost:5000/double?n=${this.state.n}`);
    const {n} = await res.json();

    this.setState({n: '' + n});
  }

  enq() {
    fetch('http://localhost:5000/enq', {method: 'POST'});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="number" value={this.state.n} onChange={(e) => this.setState({n: e.target.value})} />
        <button onClick={this.double.bind(this)}>Double</button>
        <button onClick={this.enq.bind(this)}>Enqueue</button>
      </div>
    );
  }
}

export default App;
