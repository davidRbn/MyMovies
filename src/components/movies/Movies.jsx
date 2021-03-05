import React, { useCallback, useEffect, useState } from 'react'
import MovieList from './movieList/MovieList'
import apiMovie,{apiMovieMap, apiTvMap} from '../conf/api.movies'

const Movies = () => {

  const [movieListUpcomming,setMovieListUpcomming] = useState({
      movies:null,
      loaded:false
  })

  const [tvListLatest,setTvListLatest] = useState({
      movies:null,
      loaded:false
  })

  const updtateMovies = (movies) =>{
    setMovieListUpcomming({
      movies,
      title:'Fims à venir',
     loaded:true})
 } 
 const updtateTv = (movies) => {
     setTvListLatest({
         movies,
         title:'Séries',
         loaded:true
     })

 }

const getMoviesUpcomming = useCallback(() => {
    apiMovie.get('/movie/upcoming?language=fr-FR/')
    .then(res => res.data.results)
    .then(m => {
        const movies = m.map(apiMovieMap)
        updtateMovies(movies)
    })
},[])

const getTvLatest = useCallback(()=> {
    apiMovie.get('/tv/popular?language=fr-FR/')
    .then(res => res.data.results )
    .then(m => {
        const tv = m.map(apiTvMap)
        updtateTv(tv)
    })
},[])

 useEffect(() =>{
       getMoviesUpcomming()
       getTvLatest()
 },[getMoviesUpcomming,getTvLatest])

    return(
        <>
        <MovieList movieList={movieListUpcomming}/>
        <MovieList movieList={tvListLatest}/>
        </>
    )
}

export default Movies