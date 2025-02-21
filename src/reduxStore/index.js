import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import userReducer from "../slices/userSlice";

const reduxStore = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
    devTools: true
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default reduxStore;