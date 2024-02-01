import React from 'react'
import language from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearch = () => {
    const lang = useSelector(store => store?.Gpt?.GptLanguage)
  return (
    <div className='flex justify-center'>
        {/* <Header/> */}
        <form className='bg-black mt-36' >
            <input className='border-black p-3 m-4' type='text' placeholder={language[lang].placeholder}/> 
            <button className='bg-red-600 text-white rounded-sm h-10 w-16 mr-2'>{language[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearch