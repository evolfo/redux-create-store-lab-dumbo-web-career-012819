import countReducer from './reducers/countReducer'
import candyReducer from './reducers/candyReducer'

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
  	state = reducer(state, action)
  	render()
  }

  function getState() {
  	return state
  }

  dispatch({ type: '@@INIT' })

  return {
  	dispatch,
  	getState
  }

}

// let store = createStore(countReducer)
// let store2 = createStore(candyReducer)

function render() {
  const container = document.getElementById('container');
}



// store.dispatch({ type: '@@INIT' })
// store2.dispatch({ type: '@@INIT' })