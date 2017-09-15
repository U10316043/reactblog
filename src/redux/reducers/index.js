import todosList from './todolist/todosList'

import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    todothingss: combineReducers({
        todosList,
    }),
    routing: routerReducer
})



// import sPreAddList from './todolist/todo'

// import { combineReducers } from 'redux'
// import {routerReducer } from 'react-router-redux'

// export default combineReducers({
//     sPreAdd: combineReducers({
//         sPreAddList,
//     }),
//     routing: routerReducer
// })