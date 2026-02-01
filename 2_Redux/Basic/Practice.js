const { createStore } = Redux;
console.log(createStore);
console.dir(createStore);

let initialState = {
    name: 'Yash',
    cnt: 0
}
const increment = () => ({ type: "post/increament" });
const decrement = () => ({ type: "post/decreament" });
const increaseBy =(value)=>({ type: "post/increamentBy", payload: value})
const decreaseBy =(value)=>({ type: "post/decreamentBy", payload: value})

function reducer(state=initialState, action) {
    if(action.type === increaseBy)
        return { ...state, cnt: state.cnt + action.payload }
    else if(action.type === decreaseBy)
        return { ...state, cnt: state.cnt - action.payload }
    else if(action.type === increment)
        return { ...state, cnt: state.cnt + 1 }
    else if(action.type === decrement)
        return { ...state, cnt: state.cnt - 1 }
    else    
        return state;
}
initialState = reducer(initialState, {type: increment})
console.log(initialState)
initialState = reducer(initialState, {type: increaseBy, payload: 10})
console.log(initialState)
initialState = reducer(initialState, {type: decreaseBy, payload: 10} )
console.log(initialState)
initialState = reducer(initialState, {type: 'post/yash'})
console.log(initialState)



const store = createStore(reducer)
console.log(store)
// In reducer function(line number 10), if we assign a value to the state that can be shown by getState
console.log(store.getState())


// listen state changes
store.subscribe(() => {
    console.log('STATE 👉', store.getState());
});
store.dispatch({type:increment})
// console.log(store.getState())
store.dispatch({type:increaseBy, payload: 10})
// console.log(store.getState())  