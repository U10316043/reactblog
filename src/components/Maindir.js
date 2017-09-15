import React, { Component } from 'react';
import { Link,browserHistory } from 'react-router'
import {Panel} from 'react-bootstrap'

export default function Maindir ({children}) {
    return (
      <div >
        <header>
        <Link to="/af">test Fetch</Link>
        </header>
        <div>
        <button onClick={() => browserHistory.push('/test')}>測試用施工中</button>
            {' '}
            <button onClick={() => browserHistory.push('/')}>back todolist</button>
            一直置頂 
        <div style={{ marginTop: '1.5em' }}>{children}</div>
        一直置底
        </div>
      </div>
    );
  }


