import React from 'react';

class Form extends React.Component {
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
      <div>
        <input type="number" value={this.state.n} onChange={(e) => this.setState({n: e.target.value})} />
        <button onClick={this.double.bind(this)}>Double</button>
        <button onClick={this.enq.bind(this)}>Enqueue</button>
      </div>
    );
  }
};

export default Form;
