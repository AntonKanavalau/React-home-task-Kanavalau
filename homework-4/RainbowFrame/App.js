import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame  from './components/RainbowFrame '

import colorList from './colorList.json';

ReactDOM.render(
  <RainbowFrame  colorList={colorList}>
    Hello World!
  </RainbowFrame>
  , document.getElementById('container')
)
