import React from 'react';

class ToggleButton extends
React.Component{
  constructor(){
    super();
    this.state = {
      isEnable: false
    }
  }

  render(){
    return(
      <button className ="toggle-button">
        I am toggled
        {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}

export default ToggleButton
