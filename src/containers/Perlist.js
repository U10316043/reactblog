import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/actions/index'
import { ListGroupItem } from 'react-bootstrap'

const Perlist = ({id, deleteTodo, sAdd, deleted}) =>  (
  <ListGroupItem  onClick={ () => deleteTodo(id) }>
    {sAdd}
  </ListGroupItem>
)


Perlist.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  deleted: PropTypes.bool.isRequired,
  sAdd: PropTypes.string.isRequired
}


export default connect(
  null,  
  {
    deleteTodo
  }
)(Perlist)