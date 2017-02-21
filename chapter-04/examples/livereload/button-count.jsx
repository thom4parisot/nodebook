import React, { Component } from 'react';

export default class ButtonCount extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      clickCount: 0                                           // <1>
    };
  }

  handleClick () {
    this.setState({ clickCount: this.state.clickCount + 1 }); // <2>
  }

  render() {
    let style = {};
    // style = {
    //   fontFamily: 'monospace',
    //   fontWeight: 'bold',
    //   textTransform:' uppercase',
    // };

    return (<button style={style} onClick={this.handleClick}>
      Clics : {this.state.clickCount}
    </button>);
  }
}
