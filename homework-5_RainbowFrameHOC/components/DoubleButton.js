import React from 'react';

import colorList from '../colorList.json';

import { withRainbowFrame } from './HOFRainbowFrame ';
let DoubleButtonWithBorder = withRainbowFrame({colorList})(DoubleButton);

class DoubleButton extends React.Component {
  render(){
    return (
        <DoubleButtonWithBorder>
          <div><input type="button" value={this.props.caption1} onClick={() => this.props.cbPressed(1)}/> {this.props.children}
            <input type="button" value={this.props.caption2} onClick={() => this.props.cbPressed(2)}/></div>
        </DoubleButtonWithBorder>
    )
  }
}

export default DoubleButton;