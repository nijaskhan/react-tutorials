import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        showDecrement: false
    },
    reducers: {
        increment: (state, action) => {
            // console.log("action: ", action);
            
            state.value += action.payload;
            if (state.value === 0) {
                state.showDecrement = false;
            } else {
                state.showDecrement = true;
            }
        },
        reset: (state) => {
            state.value = 0;
            state.showDecrement = false;
        }
    }
})

export const {
    increment,
    reset
} = counterSlice.actions;

export default counterSlice.reducer;