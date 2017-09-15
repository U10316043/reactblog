import React, { Component } from 'react';
import Test from '../containers/Test'
import { browserHistory } from 'react-router'

export default class Testbootstrap extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div >
          <header>
            <button onClick={() => browserHistory.push('/')}>back</button>
            {' '}
          </header>
          <h1>Bootstrap test!!!</h1>
          <Test/>
      </div>
    );
  }
}


