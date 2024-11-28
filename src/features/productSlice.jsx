import { createSlice } from '@reduxjs/toolkit'
import { storeData } from '../helper/data/data';
import { toastErrorNotify } from '../helper/toastify';


export const productSlice = createSlice({
    name:"products",
    initialState:{
filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData
    },
    reducers:{
        filterProducts(state, action) {
try {
    const filter =  storeData.filter ((product)=>
        product.type===action.payload
    );
    state.filteredProducts = filter;
    console.log("filter", filter);
    const saveState = JSON.stringify(filter);
    sessionStorage.setItem("filteredData", saveState);

} catch (error) {
    toastErrorNotify("Error")
}

        }
    },
    });
    
    export const {filterProducts} = productSlice.actions
    export default productSlice.reducer