import { configureStore } from '@reduxjs/toolkit'
import slideReducer from "../features/sliderSlice"
import productReducer  from '../features/productSlice'
import cartReducer from "../features/cartSlice"


export const store = configureStore({
  reducer: {
slider:slideReducer,
products:productReducer,
cart : cartReducer,

  },
})