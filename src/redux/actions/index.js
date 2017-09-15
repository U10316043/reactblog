// import $ from 'jquery'
// export const getAddList = (sPreAdd) => ({ type: 'TODO', sPreAdd  });

let nextTodoId = 0
export const getAddList = (sAdd) => {
    return {
        type: 'TODO', 
        id: nextTodoId++,
        sAdd
    }
}

export const deleteTodo = (id) => {
    return {
        type:'DELETE_TODO',
        id
    }
}

