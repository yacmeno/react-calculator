import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button 
        className="btn" 
        onClick={() => this.props.clickButton(this.props.name)}
      >{this.props.name}</button>
    );
  }
}

export default Button;