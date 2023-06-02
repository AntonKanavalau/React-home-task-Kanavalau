import React from 'react';

import DoubleButton from './DoubleButton'
import colorList from '../colorList.json';

import { withRainbowFrame } from './HOFRainbowFrame ';
let DoubleButtonWithBorder = withRainbowFrame(colorList)(DoubleButton);

class VotesBlock extends React.Component {
  render(){
    return(
      <DoubleButtonWithBorder caption1={this.props.caption1} caption2={this.props.caption2} cbPressed={this.props.cbPressed} children={this.props.children}/>
    )
  }
}

export default VotesBlock;