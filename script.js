// select dom elements
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const counterEl   = document.getElementById('counter');

// initial state
const initialState = {
    value: 0
}

// create reducer function
function counterReducer( state = initialState, action ){
    if( 'increment' === action.type ){
        return {
            ...state,
            value: state.value + 1
        }
    }else if( 'decrement' === action.type ){
        return {
            ...state,
            value: state.value - 1
        }
    }else{
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

// button click listeners
incrementEl.addEventListener( 'click', () => {
    store.dispatch({
        type: 'increment'
    });
} );

decrementEl.addEventListener( 'click', () => {
    store.dispatch({
        type: 'decrement'
    });
} );

// update UI
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}
render();
store.subscribe(render);