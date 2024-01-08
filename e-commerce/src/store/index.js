import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagSlice from "./bagSlice";

const eShopping = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bag: bagSlice.reducer,
  }
})

export default eShopping;