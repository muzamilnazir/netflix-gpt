import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState : {
        gptSearch : false,
        GptLanguage : "English"
    },
    reducers:{
        onGptButtonClick : (state) =>{
            state.gptSearch = !state.gptSearch
        },
        onLanguageSelectClick : (state,action) =>{
            state.GptLanguage = action.payload;
        }
    }
})
export const {onGptButtonClick,onLanguageSelectClick} = GptSlice.actions
export default GptSlice.reducer