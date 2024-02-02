import React, { useRef } from 'react'
import language from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { openai } from './openai'
import { BACKGROUND_IMG, IMAGE_URL, OPTIONS } from '../utils/constants'
import { addGptSearchMovies } from '../utils/gptSlice'
const GptSearch = () => {
  const dispatch = useDispatch()

    const lang = useSelector(store => store?.Gpt?.GptLanguage)
    const searchText = useRef(null)
    const handleGptClick = async ()=>{
      const msg = `always show top 5 movies with movie name or movie type like "${searchText?.current?.value}" with output always comma seperated like Don,Sandeesh,bahubali,badshah,gabbar`
      const chatCompletion = ["3 Idiots", "Hera Pheri", "Andaz Apna Apna", "Golmaal", "Chupke Chupke"]
      //  await openai.chat.completions.create({
      //   messages: [{ role: 'user', content:msg }],
      //   model: 'gpt-3.5-turbo',
      // });
      // const res = Promise.allSettled([chatCompletion])
      // console.log("gpt res", chatCompletion,res);


      const mov = chatCompletion.map((m)=>(
         movieSearch(m)
      ))
      let mv = await Promise.allSettled(mov);
      console.log("mv",mv);
      dispatch(addGptSearchMovies({movieNames:chatCompletion,movieList:mv}))
    }
    const movieSearch = async (movie) => {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
    
        // Use the imported OPTIONS object in the fetch request
        let res = await fetch(url, OPTIONS);
    
        res = await res.json();
        return res
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={BACKGROUND_IMG}/>
      </div>
      <div className='flex justify-center'>
        {/* <Header/> */}
        <form className='bg-black mt-36' onSubmit={e=>e.preventDefault()} >
            <input ref={searchText} className='border-black p-3 m-4' type='text' placeholder={language[lang].placeholder}/> 
            <button onClick={handleGptClick} className='bg-red-600 text-white rounded-sm h-10 w-16 mr-2'>{language[lang].search}</button>
        </form>
    </div>
    </div>
  )
}

export default GptSearch