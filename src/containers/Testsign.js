import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button,FormGroup,ControlLabel,FormControl } from 'react-bootstrap'
import {stringify} from 'qs'
import { Link,browserHistory } from 'react-router'


class Testsign extends Component{
  constructor(props) {
    super(props);
    this.state = {value: '', UN: '', NN: '', PW: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  
  handleSubmit(event) {
    event.preventDefault();
    var that = this;
    var url = 'http://localhost:8000/postsignup/';
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: new Headers({
        //  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
       }),
        body: stringify({
          username: this.state.UN, 
          nickname: this.state.NN, 
            password: this.state.PW
        })
      })
      .then(res => res.json())
      .then(res=>{
        if(res.success == true){
            browserHistory.push('/home');
        }
      })
      .catch(e => {
        console.error(e)
      })

    this.setState({value: '', UN: '', NN: '', PW: ''});
    console.log('success');
    browserHistory.push('/home');
  }

  render() {
    
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <FormGroup validationState='success'>
            <ControlLabel>nickname:</ControlLabel>
            <FormControl
              type="text"
              name="nickname"
              value={this.state.NN}
              onChange={(e)=>this.setState({NN: e.target.value})}
            />
            <ControlLabel>帳號:</ControlLabel>
            <FormControl
              type="text"
              name="username"
              value={this.state.UN}
              onChange={(e)=>this.setState({UN: e.target.value})}
            />
            <ControlLabel>密碼:</ControlLabel>
            <FormControl
              type="password"
              name="password"
              value={this.state.PW}
              onChange={(e)=>this.setState({PW: e.target.value})}
            />
          </FormGroup>  

          <Button bsStyle="success" type="submit" block>add</Button>
        </form>
      </div>
    );
  }
}

export default connect(null,{
}
)(Testsign)


