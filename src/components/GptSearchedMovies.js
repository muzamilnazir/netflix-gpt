import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GptSearchedMovies = () => {
    const {gptMoves,gptMovieNAmes} = useSelector((store)=>store.Gpt)
    // console.log("gptMoves",gptMoves[0].value.results[0]);

    if(!gptMoves) return <h1>loading....</h1>
    if(!gptMovieNAmes) return <h1>loading....</h1>
  return (
    <div className='bg-black bg-opacity-70'>
        {/* <MovieList title={gptMovieNAmes[0]} movies={gptMoves[0].value.results}  /> */}
       {gptMovieNAmes.map((movie, index) => (
        <MovieList title={movie} movies={gptMoves[index].value.results} />
        ))}

    </div>
  )
}

export default GptSearchedMovies