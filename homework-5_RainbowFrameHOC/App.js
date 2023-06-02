import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock  from './components/VotesBlock'

ReactDOM.render(
  <VotesBlock caption1={"однажды"} caption2={"пору"} cbPressed={ num => alert(num) }> в студёную зимнюю</VotesBlock>
  , document.getElementById('container')
)
