import React from 'react';

class DoubleButton extends React.Component {
  render(){
    return (
          <div><input type="button" value={this.props.caption1} onClick={() => this.props.cbPressed(1)}/> {this.props.children}
            <input type="button" value={this.props.caption2} onClick={() => this.props.cbPressed(2)}/></div>
    )
  }
}

export default DoubleButton;