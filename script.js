// select dom elements
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const counterEl   = document.getElementById('counter');

// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increment = (param) => {
    return {
        type: INCREMENT,
        payload: param
    }
}

const decrement = (param) => {
    return {
        type: DECREMENT,
        payload: param
    }
}

// initial state
const initialState = {
    value: 0
}

// create reducer function
function counterReducer( state = initialState, action ){
    const newState = { ...state };

    switch (action.type) {
        case INCREMENT:
          return { ...newState, value: newState.value + action.payload };
        case DECREMENT:
          return { ...newState, value: newState.value - action.payload };
        default:
          return newState;
      }
}

// create store
const store = Redux.createStore(counterReducer);

// button click listeners
incrementEl.addEventListener( 'click', () => {
    store.dispatch(increment(5));
} );

decrementEl.addEventListener( 'click', () => {
    store.dispatch(decrement(2));
} );

// update UI
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value;
}
render();
store.subscribe(render);