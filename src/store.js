import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice"

export default configureStore({
    reducer:{
        cart:cartReducer
    }
})