import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import movieReducer from "./movieSlice"
import GptReducer from "./gptSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        Gpt : GptReducer

    }
})

export default appStore