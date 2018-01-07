import React from 'react';

class Form extends React.Component {
  componentWillMount() {
    this.props.onInitial();
  }
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
