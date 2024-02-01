import React from 'react'
import { MOVIE_CARD_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-40 pr-4'>
        <img alt='movie card' src = {MOVIE_CARD_URL+poster_path}/>
    </div>
  )
}

export default MovieCard