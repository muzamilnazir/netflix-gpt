import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        backGroundMovieVolume : 0,
        nowPlayingMovies:null,
        tralerMovie : null,
        popular : null,
        topRated:null,
        upcoming:null
    },
    reducers:{
        addMovies:(state,action)=>{
             state.nowPlayingMovies = action?.payload //when triggered initial state will be this obj
        },
        addTrailer : (state,action)=>{
            state.tralerMovie = action?.payload
        },
        addNowPopular : (state,action)=>{
            state.popular = action?.payload
        },
        addNowTopRated : (state,action)=>{
            state.topRated = action?.payload
        },
        addNowUpcoming : (state,action)=>{
            state.upcoming = action?.payload
        },
        setBackgroundVolume : (state,action)=>{
            state.backGroundMovieVolume = action?.payload
        },
        
    }
})

export const {addMovies,addTrailer,addNowPopular,addNowTopRated,addNowUpcoming,setBackgroundVolume} = movieSlice.actions
export default movieSlice.reducer