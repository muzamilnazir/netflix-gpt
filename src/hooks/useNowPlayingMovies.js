import { useDispatch } from "react-redux"
import { addMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { OPTIONS } from "../utils/constants"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    const nowPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',OPTIONS)
        const movies = await data.json()
        dispatch(addMovies(movies.results))
    }
    useEffect(()=>{
        nowPlayingMovies()
    },[])
}
export default useNowPlayingMovies