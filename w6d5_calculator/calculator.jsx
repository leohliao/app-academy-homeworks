eimport React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);

  }

  // your code here
  setNum1(event) {
    event.preventDefault();
    const num1 = parseInt(event.target.value);
    this.setState({ num1 });
  }

  setNum2(event) {
    event.preventDefault();
    const num2 = parseInt(event.target.value);
    this.setState({ num2 });
  }

  add(event){
    event.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  minus(event){
    event.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  divide(event){
    event.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  multiply(event){
    event.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  clear(event){
    event.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 });
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <input onChange={this.setNum1} value={num1}/>
        <input onChange={this.setNum2} value={num2}/>
        <br/>
        <button onClick={this.add}> + </button>
        <button onClick={this.minus}> - </button>
        <button onClick={this.multiply}> * </button>
        <button onClick={this.divide}> / </button>
        <br/>
        <button onClick={this.clear}>Clear</button>
        <br />

        <h1>{ this.state.result }</h1>
      </div>
    );
  }
}

export default Calculator;
