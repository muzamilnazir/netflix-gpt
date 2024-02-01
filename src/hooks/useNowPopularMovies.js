
import { useDispatch } from "react-redux"
import { addNowPopular } from "../utils/movieSlice"
import { useEffect } from "react"
import { OPTIONS } from "../utils/constants"
const useNowPopularMovies = ()=>{
    const dispatch = useDispatch()
    const NowPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',OPTIONS)
        const movies = await data.json()
        dispatch(addNowPopular(movies.results))
    }
    useEffect(()=>{
        NowPopularMovies()
    },[])
}
export default useNowPopularMovies