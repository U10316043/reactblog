import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Todo from '../containers/Todo'
import List from '../containers/List'
import {Panel} from 'react-bootstrap'

export default class App extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div >
        <header>
          <button onClick={() => browserHistory.push('/test')}>測試用施工中</button>
          {' '}
        </header>
        <p/>
          <Panel header="Bootstrap React practice">
            <Todo/>
            <p/>
            <List/>
          </Panel>
      </div>
    );
  }
}


