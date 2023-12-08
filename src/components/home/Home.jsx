import React, { useCallback, useEffect, useState } from 'react'
import MovieList from './movieList/MovieList'
import apiMovie,{apiMovieMap, apiTvMap} from '../conf/api.movies'
import Loader from '../loader/Loader'

const Home = () => {

  let hello =  [
        { name:'Lisa'    , mark:'16' },
        { name:'Pascal'  , mark:'13' },
        { name:'Romain'  , mark:'12' },
        { name:'Lucas'   , mark:'4'  },
        { name:'Aurélie' , mark:'14' }
    ]
    .map(function(student) { student.mark = Number(student.mark); return student })
    .filter(function(student) { return student.mark >= 10 })
    .reduce(function(acc, student) { return student.mark + acc }, 0);

    console.log(hello);

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
        <>
        { !movieListUpcomming.loaded && !tvListLatest.loaded ? <Loader/> : 
            
        <div style={{marginTop:'50px'}}>
        <MovieList movieList={movieListUpcomming}/>
        <MovieList movieList={tvListLatest}/>
        
        </div>
        
        }</>)
}

export default Home