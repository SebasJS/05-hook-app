
export const todoReducer = ( initialValue = [], action ) => {
  switch ( action.type ) {
    case '[TODO] add todo':
      return [...initialValue, action.payload]

    case '[TODO] remove Todo':
      return initialValue.filter( ( todo ) =>  todo.id !== action.payload )

    case '[TODO] toggle Todo':
      return initialValue.map( todo => {
        if ( todo.id === action.payload ) {
          return { 
            ...todo, 
            done: !todo.done 
          }
        }
        return todo
      } )
       
    default:
      return initialValue;
  }
}
