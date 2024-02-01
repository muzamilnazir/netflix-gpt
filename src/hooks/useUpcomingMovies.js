
import { useDispatch } from "react-redux"
import { addNowUpcoming } from "../utils/movieSlice"
import { useEffect } from "react"
import { OPTIONS } from "../utils/constants"
const useUpcomingMovies = ()=>{
    const dispatch = useDispatch()
    const NowUpcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',OPTIONS)
        const movies = await data.json()
        dispatch(addNowUpcoming(movies.results))
    }
    useEffect(()=>{
        NowUpcomingMovies()
    },[])
}
export default useUpcomingMovies