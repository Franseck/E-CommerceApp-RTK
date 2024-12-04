import { configureStore } from '@reduxjs/toolkit'
import slideReducer from "../features/sliderSlice"
import productReducer  from '../features/productSlice'
import cartReducer from "../features/cartSlice"
import authReducer  from '../features/authSlice'

export const store = configureStore({
  reducer: {
slider:slideReducer,
products:productReducer,
cart : cartReducer,
user: authReducer,
  },
})