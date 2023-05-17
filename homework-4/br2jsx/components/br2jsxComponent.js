import React from 'react';

const Br2jsx = ({text}) => {
  return <div dangerouslySetInnerHTML = {{__html: text}} key={1}
              style={{width: "200px",textAlign: "center",color: "white", backgroundColor: "green", padding: "10px"}}></div>
}

export default Br2jsx;