// @flow

import React, { Component } from 'react';
import './App.css';
import MyButton from './components/MyButton';

type State = {
  count: number,
}

type Props = {}

class App extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.countFunc = this.countFunc.bind(this);
  }

  countFunc: (count: number) => void

  countFunc(count: number) {
    this.setState({
      count,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Welcome back...stage</p>
        <h1>
          {' '}
          {count + 1}
        </h1>
        <MyButton name="Click Me" countFunc={this.countFunc} />
      </div>
    );
  }
}

export default App;
