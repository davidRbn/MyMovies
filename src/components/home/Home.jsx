import React, { useCallback, useEffect, useState } from 'react'
import MovieList from './movieList/MovieList'
import apiMovie,{apiMovieMap, apiTvMap} from '../conf/api.movies'

const Home = () => {

  const [movieListUpcomming,setMovieListUpcomming] = useState({
      movies:null,
      typeMovie:'',
      title:'',
      loaded:false
  })

  const [tvListLatest,setTvListLatest] = useState({
      movies:null,
      typeMovie:'',
      title:'',
      loaded:false
  })

  const updtateMovies = (movies) =>{
    setMovieListUpcomming({
      movies,
      typeMovie:'movie',
      title:'Fims à venir',
     loaded:true})
 } 
 const updtateTv = (movies) => {
     setTvListLatest({
         movies,
         typeMovie:'tv',
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
        <div style={{marginTop:'50px'}}>
        <MovieList movieList={movieListUpcomming}/>
        <MovieList movieList={tvListLatest}/>
        </div>
    )
}

export default Home