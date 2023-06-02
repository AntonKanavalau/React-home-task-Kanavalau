import React from 'react';

import colorList from '../colorList.json';

function withRainbowFrame(Comp){
  class NewComp extends React.Component{
    render(){
      let code = <Comp {...this.props} />;
      colorList.forEach( color => {
        code= <div key={color.code} style={{ border: `5px solid ${color.color}`, padding: '10px' }}>{code}</div>;
      })
      return(code)
    }
  }
  return NewComp;
}

export {withRainbowFrame};