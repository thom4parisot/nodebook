import React, { Component } from 'react';
import timerFn from './timer.js';

export default class DateInterval extends Component {        // <1>
  constructor(props) {                                       // <2>
    super(props);

    const {interval} = props;
    this.onTick = this.onTick.bind(this);

    this.state = {
      tickData: timerFn({ interval, onTick: this.onTick })   // <3>
    };
  }

  onTick (tickData) {
    this.setState({ tickData });                   // <4>
  }

  render() {                                       // <5>
    const {className, now} = this.state.tickData;  // <6>

    return (<time className={className} dateTime={now.toISOString()}>
      {now.toLocaleTimeString()}
    </time>);
  }
}
