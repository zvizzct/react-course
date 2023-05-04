import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {},
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    incrementBy: (state, action) => {
      state.counter += action.payload
    },
    decrement: (state) => {
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = initialState.counter
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, incrementBy, decrement, reset } = counterSlice.actions
