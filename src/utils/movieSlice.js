import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        tralerMovie : null
    },
    reducers:{
        addMovies:(state,action)=>{
             state.nowPlayingMovies = action?.payload //when triggered initial state will be this obj
        },
        addTrailer : (state,action)=>{
            state.tralerMovie = action?.payload
        }
        
    }
})

export const {addMovies,addTrailer} = movieSlice.actions
export default movieSlice.reducer