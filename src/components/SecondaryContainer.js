import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store?.movie)
  return (
    movies?.nowPlayingMovies &&
    <div className='bg-black'>
      <div className=' pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies ={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies ={movies?.topRated}/>
      <MovieList title={"Popular"} movies ={movies?.popular}/>
      <MovieList title={"Upcoming"} movies ={movies?.upcoming}/>
    </div>

    </div>
    
  )
}

export default SecondaryContainer