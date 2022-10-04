import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cards/cardsSlice";

const store = configureStore({
    reducer:{
        card:cardsSlice,
    }
})

export default store;