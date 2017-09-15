import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAddList } from '../redux/actions/index'
import { Button,FormGroup,ControlLabel,FormControl } from 'react-bootstrap'

class Todo extends Component{
  constructor(props) {
    super(props)
    this.state = {todothing:""}
  }
  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    const {state:{todothing}} = this
    const onAddList = (e) => {
      e.preventDefault()
      if(!todothing.trim()) {  {/* trim() method removes whitespace from both ends of a string.  */}
        return
      }
      this.props.getAddList(todothing);
      this.setState({todothing:''})
    }
    return (
      <div>
        <form onSubmit={ onAddList }>
          <FormGroup validationState='success'>
            <ControlLabel><h3>TodoList:</h3></ControlLabel>
            <FormControl
              type="text"
              value={todothing}
              onChange={(e)=>this.setState({todothing: e.target.value})}
            />
          </FormGroup>  
          <Button bsStyle="success" type="submit" block>add</Button>
        </form>
      </div>
    )
  }
}

export default connect(null,{
  getAddList
}
)(Todo)


