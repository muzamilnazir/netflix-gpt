
import { useDispatch } from "react-redux"
import { addNowTopRated } from "../utils/movieSlice"
import { useEffect } from "react"
import { OPTIONS } from "../utils/constants"
const useNowTopRatedMovies = ()=>{
    const dispatch = useDispatch()
    const NowtopMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',OPTIONS)
        const movies = await data.json()
        dispatch(addNowTopRated(movies.results))
    }
    useEffect(()=>{
        NowtopMovies()
    },[])
}
export default useNowTopRatedMovies