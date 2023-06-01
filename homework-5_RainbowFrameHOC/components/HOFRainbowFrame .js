import React from 'react';

/*const withRainbowFrame = colorList => Comp => props =>{
      let code = <Comp {...props} />;
      colorList.forEach( color => {
        code= <div key={color.code} style={{ border: `5px solid ${color.color}`, padding: '10px' }}>{code}</div>;
      });
      return code;
};*/

let withRainbowFrame = colorList => Comp => props => {
  let code = <Comp {...props} />;
  colorList.forEach( color => {
    code= <div key={color.code} style={{ border: `5px solid ${color.color}`, padding: '10px' }}>{code}</div>;
  });
  return code;
}

/*const withRainbowFrame = colorList => Comp =>{

  class NewComp extends React.Component {
    render() {
      let currentContent = <Comp {...this.props}/>;
      for (let i = 0; i < colorList.length; i++) {
        currentContent = <div key={colorList[i].code} style={{border: `5px solid ${colorList[i].color}`, padding: '10px'}}>{currentContent}</div>
      }
      return currentContent;
    }
  }
  return NewComp;
}*/

export {withRainbowFrame};