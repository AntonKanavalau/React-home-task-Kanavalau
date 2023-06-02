import React from 'react';

import colorList from '../colorList.json';
//Плохая версия
/*function withRainbowFrame(Comp){
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
}*/

//Так лучше
/*
function withRainbowFrame(colorList) {
  return function(Comp) {
    return props => (
      <div key={colorList.code} style={{ border: `5px solid ${colorList.color}`, padding: '10px' }}><Comp {...props} /></div>
    );
  };
}
*/



const withRainbowFrame = colorList => Comp => props => {
  console.log(colorList);
  let code = <Comp {...props} />;
  colorList.forEach( color => {
    code= <div key={color.code} style={{ border: `5px solid ${color.color}`, padding: '10px' }}>{code}</div>;
  });
  return code;
}


export {withRainbowFrame};