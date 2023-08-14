import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0, //could be different name, not only value
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState, //the first state
  reducers: {
    increment: (state) => { //state is the state of slice
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer