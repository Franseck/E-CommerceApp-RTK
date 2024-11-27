import { configureStore } from '@reduxjs/toolkit'
import slideReducer from "../features/sliderSlice"


export const store = configureStore({
  reducer: {
slider:slideReducer,
  },
})