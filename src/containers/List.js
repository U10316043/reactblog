import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Perlist from './Perlist'
import { ListGroup } from 'react-bootstrap'
class List extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ListGroup>
        {this.props.todothingss.map(todothing =>  
          <Perlist
            key={todothing.id}
            {...todothing}
          />
        )}
      </ListGroup>
    )
  }
}

List.PropTypes = {
  todothingss: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    sAdd: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default connect(
  (state) => {
    const { todosList } = state.todothingss;
    return {todothingss: todosList.filter(todothing => !todothing.deleted)}
  },
  null
)(List)



