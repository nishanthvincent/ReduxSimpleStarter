// The state object is not the application state, but the state this reducer is responsible for.
export default function(state = null, action) {
  switch(action.type){
    console.log(action)
    case: 'BOOK_SELECTED'
      return action.payload
  }
  return state;
}