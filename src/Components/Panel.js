import React, { Component } from 'react';
import Button from './Button';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(buttonName) {
    return (
      <Button 
        name={buttonName}
        clickButton={this.props.clickButton}
      />
    );
  }

  render() {
    return (
      <div className="panel">
        <div className="row1">
          {this.renderButton("9")}
          {this.renderButton("4")}
          {this.renderButton("1")}
          {this.renderButton(".")}
        </div>
        <div className="row2">
          {this.renderButton("8")}
          {this.renderButton("5")}
          {this.renderButton("2")}
          {this.renderButton("0")}
        </div>
        <div className="row3">
          {this.renderButton("9")}
          {this.renderButton("6")}
          {this.renderButton("3")}
          {this.renderButton("=")}
        </div>
        <div className="row4">
          {this.renderButton("DEL")}
          {this.renderButton("/")}
          {this.renderButton("*")}
          {this.renderButton("-")}
          {this.renderButton("+")}
        </div>
      </div>
    );
  }
}

export default Panel;