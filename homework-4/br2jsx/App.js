import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/br2jsxComponent';

let text="первый<br>второй<br/>третий<br />последний";
let arr = text.split(/<br ?\/?>/)
              .flatMap((line, i) => [line, <br key={`line-${i}`} />]);

ReactDOM.render(
  <Br2jsx  text={arr}></Br2jsx>
  , document.getElementById('container')
)
