  export default function (state = [], action){
    switch (action.type) {
      case 'TODO':
      const newTodo = {
        sAdd: action.sAdd,
        id: action.id,
        deleted: false
      }
        return  [...state,
          newTodo
        ]
  
      case 'DELETE_TODO':
      return state.map(todothing => {
        if (todothing.id !== action.id) {
            return todothing
        }
        return Object.assign({}, todothing, {
          deleted: !todothing.deleted
        })
      })
      default:
        return state;
    }
  }