import { configureStore } from '@reduxjs/toolkit'
import slideReducer from "../features/sliderSlice"
import productSlice  from '../features/productSlice'


export const store = configureStore({
  reducer: {
slider:slideReducer,
products:productSlice,
  },
})