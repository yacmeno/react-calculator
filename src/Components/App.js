import React, { Component } from 'react';
import './App.css';
import Panel from "./Panel"
import Display from "./Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [],
      allowAppend: true //to avoid appending numbers to last answer
    }
    this.clickButton = this.clickButton.bind(this); //passed as prop to Panel>Button
    this.handleOperation = this.handleOperation.bind(this);
    this.handleDel = this.handleDel.bind(this)
    this.handleDot = this.handleDot.bind(this)
    this.handleEqual = this.handleEqual.bind(this)
  }

  //clickButton updates state/display depending on the button clicked
  clickButton(buttonName) {
    if (buttonName === "DEL") {
      this.handleDel(this.state.current);
    } else if (buttonName === ".") {
      this.handleDot(this.state.current, buttonName);
    } else if (buttonName === "=") {
      this.handleEqual(this.state.current);
    } else if (buttonName === "+" || buttonName === "-" || buttonName === "*" || buttonName === "/") {
      this.handleOperation(this.state.current, buttonName);
    } else {
      if (this.state.allowAppend){
        let newCurrent = this.state.current.concat(buttonName);
        this.setState({
          current: newCurrent
        });
      } else {
        this.setState({
          current: [buttonName],
          allowAppend: true
        });
      }
    }
  }

  handleOperation(current, operation) {
    let newCurrent = current.concat(operation);
    this.setState({
      current: newCurrent,
      allowAppend: true
    })
  }

  handleDel(current) {
    let currentToPop = current;
    currentToPop.pop();
    this.setState({
      current: currentToPop,
      allowAppend: true
    });
  }

  handleDot(current, dotButton){
    let newCurrent = current.concat(dotButton);
    this.setState({
      allowAppend: true,
      current: newCurrent
    });
  }

  handleEqual(current){
    if (current.length === 0) {
      return
    } else {
      let result = eval(current.join(''));
      this.setState({
        current: [result.toString()],
        allowAppend: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="disp">
          <Display value={this.state.current} />
        </div>
        <Panel clickButton={this.clickButton}/>
        <p>Limitations: </p>
        <ul align="left">
          <li> Crashes with nonsense like "*3-5", "1/0", "1..33+1"</li>
        </ul>
        <p>Usage: </p>
        <ul align="left">
          <li>Click "DEL" to erase last element</li>
          <li>Deleting right after "=" removes answer</li>
        </ul>
      </div>
    );
  }
}

export default App;
