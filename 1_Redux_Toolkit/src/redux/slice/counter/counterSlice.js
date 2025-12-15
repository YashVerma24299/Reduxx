import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
  },
  reducers: {
    increment:  state => {
      state.value += 1
    },
    decrement: state => {
      state.value > 0 ? state.value-=1 : state.value=0 
    },
    reset: state => {
      state.value =10
    },
    incrementByAmount: (state, action) => {        
      state.value += Number(action.payload)
    },
  },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer