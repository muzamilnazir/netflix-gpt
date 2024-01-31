import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle.js'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store)=>store?.movie?.nowPlayingMovies)
  if(!movies) return
  let trailerMovie = movies[0]
  const {original_title,overview,id} = trailerMovie
  return (
    <div>
      <VideoTitle title = {original_title} overview = {overview} />

      <VideoBackground id= {id}/>
      
    </div>
  )
}

export default MainContainer