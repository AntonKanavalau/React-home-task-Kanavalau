import React from 'react';

class RainbowFrame extends React.Component{
  render() {
    let currentContent = this.props.children;
    //Если вдруг мы захоти пройтись с конца
    /*for (let i = this.props.colorList.length-1; i >= 0; i--){*/
    for (let i =0;  i< this.props.colorList.length; i++){
      currentContent= <div key={this.props.colorList[i].code} style={{ border: `5px solid ${this.props.colorList[i].color}`, padding: '10px' }}>{currentContent}</div>
    }
    return currentContent;
  }
}

/*const RainbowFrame = ({colorList, children }) => {
  let currentContent = children;

  colorList.forEach((color, index) => {
    const content = colorList[index] ? currentContent : children;
    return currentContent = <div key={color.code} style={{ border: `5px solid ${color.color}`, padding: '10px' }}>{content}</div>
  })

  return currentContent;
}*/

export default RainbowFrame;