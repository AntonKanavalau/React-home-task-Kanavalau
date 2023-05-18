import React from 'react';

const RainbowFrame = ({colorList, children }) => {
  let currentContent = children;

  colorList.forEach((color, index) => {
    const content = colorList[index] ? currentContent : children;
    return currentContent = <div key={color.code} style={{ border: `5px solid ${color.color}`, padding: '10px' }}>{content}</div>
  })

  return currentContent;

}

export default RainbowFrame;