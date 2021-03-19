import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import apiMovie, { apiMovieMap } from '../conf/api.movies'
import { detailMovie, detailTv } from '../conf/detail.movie';

const ListSearchMovies = (value) => {


   let {searchValue,typeMovie } =  value.location.state
   let history = useHistory()

   const [movieSearchList,setMovieSearchList] = useState({
        movies : null,
        loaded:false
      })

      const updtateSearchMovies = (movies) => {
        setMovieSearchList({
            movies,
            loaded:true
        })
   
    }
    
    const getMovies = useCallback(() =>  {
      apiMovie.get(`/search/${typeMovie}?query=${searchValue}`)
      .then(res => {
        console.log(res.data.results)
       return res.data.results})
      .then(m =>{
            const movie = m.map(apiMovieMap)
            updtateSearchMovies(movie)
      })},[searchValue,typeMovie])


      useEffect(() => {
        getMovies()
      },[searchValue,getMovies])

      

      const stylesSearchMovie = {
        gridList:{
            justifyContent:'center'
            
        },
        gridListTile:{
          width:'150px',
          height:'250px',
        },
        image:{
          cursor: 'pointer'
        }
      }


 const handleMovieTv = (e,id,title) => {
  e.preventDefault()
    switch(typeMovie){
      case'movie':
        detailMovie(id,title,typeMovie,history);  
        break; 
      case'tv':
       detailTv(id,title,typeMovie,history)
       break;
       default:
         console.error()
    }
  }
    
    return(
        <>
      <GridList style={stylesSearchMovie.gridList}>
        {movieSearchList.movies != null && movieSearchList.movies.filter(movie => movie.poster_path != null).map((movie,key) => (
          <GridListTile key={key} style={stylesSearchMovie.gridListTile}>
            <img onClick={(e) => handleMovieTv(e,movie.id,movie.title)} src={movie.img} alt={movie.title} style={stylesSearchMovie.image}/>
            <GridListTileBar
              title={movie.title}
              actionIcon={
                <IconButton aria-label={`star ${movie.title}`}>
                  <StarBorderIcon
                />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </>
    )
}

export default ListSearchMovies