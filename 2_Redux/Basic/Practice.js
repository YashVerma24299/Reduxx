const { createStore } = Redux;
console.log(createStore);
console.dir(createStore);

let initialState = {
    name: 'Yash',
    cnt: 0
}

function reducer(state=initialState, action) {
    if(action.type === 'post/increamentBy')
        return { ...state, cnt: state.cnt + action.payload }
    else if(action.type === 'post/decreamentBy')
        return { ...state, cnt: state.cnt - action.payload }
    else if(action.type === 'post/increament')
        return { ...state, cnt: state.cnt + 1 }
    else if(action.type === 'post/decreament')
        return { ...state, cnt: state.cnt - 1 }
    else    
        return state;
}
initialState = reducer(initialState, {type: 'post/increament'})
console.log(initialState)
initialState = reducer(initialState, {type: 'post/increamentBy', payload: 10})
console.log(initialState)
initialState = reducer(initialState, {type: 'post/decreamentBy', payload: 10} )
console.log(initialState)
initialState = reducer(initialState, {type: 'post/yash'})
console.log(initialState)



const store = createStore(reducer)
console.log(store)
// In reducer function, if we assign a value to the state that can be shown by getState
console.log(store.getState())


// listen state changes
store.subscribe(() => {
    console.log('STATE 👉', store.getState());
});
store.dispatch({type:"post/increament"})
// console.log(store.getState())
store.dispatch({type:"post/increamentBy", payload: 10})
// console.log(store.getState())  