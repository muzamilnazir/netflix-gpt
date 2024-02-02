import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState : {
        gptSearch : false,
        GptLanguage : "English",
        gptMoves : null,
        gptMovieNAmes :null
    },
    reducers:{
        onGptButtonClick : (state) =>{
            state.gptSearch = !state.gptSearch
        },
        onLanguageSelectClick : (state,action) =>{
            state.GptLanguage = action.payload;
        },
        addGptSearchMovies : (state,action) => {
            const {movieNames,movieList} = action.payload
            state.gptMoves = movieList
            state.gptMovieNAmes = movieNames
        }
    }
})
export const {onGptButtonClick,onLanguageSelectClick,addGptSearchMovies} = GptSlice.actions
export default GptSlice.reducer