import React from 'react';

const Br2jsx = ({text}) => {
  let arr = text.split(/<br ?\/?>/)
                .flatMap((line, i) => [line, <br key={`line-${i}`} />]);
  return <div key={1}
              style={{width: "200px",textAlign: "center",color: "white", backgroundColor: "green", padding: "10px"}}>{arr}</div>
}

export default Br2jsx;