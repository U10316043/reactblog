import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, ButtonGroup}  from 'react-bootstrap'
const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
class Test extends Component{
  constructor(props) {
    super(props)
    this.state = {isLoading: false}
  }
  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    let isLoading = this.state.isLoading;

    const handleClick = () => {
      this.setState({isLoading: true});
      // This probably where you would have an `ajax` call
      setTimeout(() => {
        // Completed of async action, set loading state back
        this.setState({isLoading: false});
      }, 2000);
    }
    return (
        <div>
            <h3>Test:</h3>
            <Button bsStyle="warning">Warning</Button>
            <div className="well" style={wellStyles}>
              <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
              <Button bsSize="large" block>Block level button</Button>
              <Button
                bsStyle="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}>
                {isLoading ? 'Loading...' : 'Loading state'}
              </Button>
              <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
            </div>
        </div>
    )
  }
}

export default connect(null,{
}
)(Test)


