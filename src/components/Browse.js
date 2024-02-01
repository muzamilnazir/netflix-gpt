import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './mainContainer'
import SecondaryContainer from "./SecondaryContainer"
import useNowPopularMovies from '../hooks/useNowPopularMovies'
import useNowTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  useUpcomingMovies()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse