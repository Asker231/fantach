import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name:'cards',
    initialState:{
      arr:[]
    },
    reducers:{
        addCard(state,action){
            state.arr.push(action.payload)
        }
    }
});
export const {addCard} = cardsSlice.actions;

export default cardsSlice.reducer;