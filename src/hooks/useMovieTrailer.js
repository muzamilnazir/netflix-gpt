import { useDispatch } from "react-redux"
import { addTrailer } from "../utils/movieSlice"
import { useEffect } from "react"
import { OPTIONS } from "../utils/constants"

const useMovieTrailer = (id)=>{
    const dispatch = useDispatch()
    const backGroundMovie = async ()=>{
        let movieVideos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, OPTIONS)
        movieVideos = await movieVideos?.json()
        let movietrailer = movieVideos?.results?.filter((res)=>{
            return res?.type === "Trailer"
             
        })
        movietrailer = movietrailer?.length ? movietrailer[0] : movieVideos?.results[0];
        dispatch(addTrailer(movietrailer))
    }
    useEffect(()=>{
        backGroundMovie()
    },[])
}
export default useMovieTrailer