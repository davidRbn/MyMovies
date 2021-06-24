import React, { useCallback, useEffect, useState } from 'react'
import apiMovie, { apiMovieMap } from '../conf/api.movies'
import './detailMovie.scss'


const DetailMovie = (props) => {

    
    let {id,typeMovie} = props.location.state

    const [movieDetail,setMovieDetail] = useState({
        movies:null,
        loaded:false
    })

  const updateMovieDetail = (movies) => {
      setMovieDetail({
          movies:[movies],
          loaded:true
      })
  }


  const getMovieDetail = useCallback( () => {
       apiMovie.get(`${typeMovie}/${id}?language=fr`)
              .then(res => res.data)
              .then(m => {
                  const movies = apiMovieMap(m)
                  updateMovieDetail(movies)
              })
              },[id,typeMovie])


  useEffect(() => {
        getMovieDetail()
  },[getMovieDetail])

  console.log(movieDetail) 

    return(
        <div className='detailMovie'>
            {!movieDetail.loaded ? 
            <h1>CHARGEMENT</h1>
        : movieDetail.movies.map((m,key) =>(
            <div key={key}>
                <img alt={m.title} src={m.img}/>
                    <h4>{m.title}</h4>
                      <p>{m.details}</p>
                    <p className='descriptionDetailMovie'>{m.description}</p>
            </div>
        ))  }
        </div>
    )
}

export default DetailMovie