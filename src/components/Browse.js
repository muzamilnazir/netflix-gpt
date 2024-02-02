import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './mainContainer'
import SecondaryContainer from "./SecondaryContainer"
import useNowPopularMovies from '../hooks/useNowPopularMovies'
import useNowTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
import GptSearchedMovies from './GptSearchedMovies'

const Browse = () => {
  const gptSearchButtonStatus = useSelector(store => store?.Gpt)
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  useUpcomingMovies()
  return (
    <div>
     { gptSearchButtonStatus?.gptSearch ? <><Header/> <GptSearch/> <GptSearchedMovies/></> :<> <Header/>
      <MainContainer/>
      <SecondaryContainer/></>}
      
      
    </div>
  )
}

export default Browse