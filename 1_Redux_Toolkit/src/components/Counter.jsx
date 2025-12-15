import { useSelector, useDispatch} from 'react-redux'
import {decrement, increment, incrementByAmount, reset, } from '../redux/Slice/counter/counterSlice'
import { useState } from 'react';

export default function Counter(){

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
    <div className="max-w-sm mx-auto mt-10 p-5 border rounded-lg">
      <div className="flex flex-col items-center justify-center gap-3">
      <button onClick={handleIncrement} className="rounded-md  gap-3 bg-blue-500 px-4 py-2">+</button>
      <p className="text-lg font-medium">Count: {count}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleDecrement}>-</button>
      <button className="mt-3 px-4 py-2 bg-gray-600 text-white rounded w-full" onClick={handleReset}>Reset</button>
      <br /> <br /> <br />
      <input className="w-full border p-2 rounded" type="Number" value={amount} placeholder='Enter amount' onChange={(e)=>setAmount(e.target.value)}/>
      <button className="mt-3 px-6 bg-green-600 text-white py-2 rounded" onClick={handleAmount}>Increase by Amount</button>
    </div>
    </div>
  )
}