import React from 'react';

const RainbowFrame = ({colorList, children }) => {
  let currentContent = null;

  colorList.map((color, index) => {
    const content = colorList[index - 1] ? currentContent : children;
    console.log(currentContent);
    return currentContent = <div key={color.code} style={{ border: `5px solid ${color.color}`, padding: '10px' }}>{content}</div>

  })

  return currentContent;

}

export default RainbowFrame;