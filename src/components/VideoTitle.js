import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-3/4'>{overview}</p>
        <div>
            <button className='bg-white text-black px-6 py-2 mr-2 text-lg font-bold rounded-sm hover:bg-opacity-80'>▶️Play</button>
            <button className='bg-gray-400 text-lg font-bold rounded-sm text-center mx-4 py-2  bg-opacity-50 w-36 hover:bg-opacity-80'>❕More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle