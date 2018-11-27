//this is just to execute with node js to learn concept of react and redux. This is not connected with UI

const redux = require('redux'); //node import syntax
const createStore = redux.createStore; //create store allows us to create new redux store. 

const initialState = { //setting initial state for rootReducer
    counter : 0
}

//Reducer
const rootReducer = (state= initialState, action) => { //if state is undefined, it will show default/initial state, ES6
    if(action.type === 'INC_COUNTER'){
        return{
            ...state, //copies the old state, spread operator ES6
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//Store
const store = createStore(rootReducer); //store needs to connect with reducer, that is the only thing to manipulate state
console.log('[storeState]',store.getState()); //$node install --save redux // $node redux-basics.js

//Subscription
store.subscribe(() => {
    console.log('[subscription]', store.getState());
}); //two output because it is triggered two times, everytimes the state changes.

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log('[action dispatching]',store.getState())

