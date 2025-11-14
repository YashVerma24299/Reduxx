// https://redux-toolkit.js.org/tutorials/quick-start
import './App.css' 
import { useSelector, useDispatch} from 'react-redux'
import { decrement, increment, reset, incrementByAmount} from './features/counter/counterSlice';
import { useState } from 'react'
;
export default function App(){

  const [amount, setAmount]=useState("");
  const count =useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement())
  }
  function handleReset(){
    dispatch(reset())
  }
  function handleAmount(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className="container">
      <button onClick={handleIncrement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
      <button style={{marginLeft:"1rem"}}onClick={handleReset}>Reset</button>
      <br /> <br /> <br />
      <input type="Number" value={amount} placeholder='Enter amount' onChange={(e)=>setAmount(e.target.value)}/>
      <br /> <br />
      <button onClick={handleAmount}>Increase by Amount</button>
    </div>
  )
}