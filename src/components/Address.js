import React from 'react';

cclass Address extends React.Component {
  render() {
    return (
      <div className="address">{this.props.street}, {this.props.city}</div>
    );
  }
}

export default Address;
