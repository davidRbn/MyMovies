import React from 'react'
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router';
import { handleMovieTv } from '../conf/detail.movie';
import styles from '../styles/styles'
import { makeStyles } from '@material-ui/core/styles';


const ListSearchMovies = (value) => {


   let { movieSearchList,typeMovie } =  value.location.state
   let history = useHistory()

  



  //  const [movieSearchList,setMovieSearchList] = useState({
  //       movies : null,
  //       loaded:false
  //     })

  //     const updtateSearchMovies = (movies) => {
  //       setMovieSearchList({
  //           movies,
  //           loaded:true
  //       })
   
  //   }
    
  //   const getMovies = useCallback(() =>  {
  //     apiMovie.get(`/search/${typeMovie}?query=${searchValue}`)
  //     .then(res => {
  //      return res.data.results})
  //     .then(m =>{
  //           const movie = m.map(apiMovieMap)
  //           updtateSearchMovies(movie)
  //     })},[searchValue,typeMovie])


  //     useEffect(() => {
  //       getMovies()
  //     },[searchValue,getMovies])

      

      const stylesSearchMovie = makeStyles(() => ({
        
        gridList:{
          justifyContent:'space-evenly',
          flexDirection:'row',
          alignContent:'space-around',
      },
      // gridListTile:{
      //   width:'150px',
      //   height:'100px',
      // },
      rootGrid:{
        width:'150px!important',
        height:'250px!important',
        marginTop:'50px'
      },
      image:{
        cursor: 'pointer',
        width:'150px',
        height:'100%',
        
      },
      title:{
        fontSize:'12px',
        color: styles.secondaryColor
           },
      tileBarRoot:{
        width:'100%'
      }

      })) 
        
      


    const classes = stylesSearchMovie()
    
    return(
        <>
      <GridList className={classes.gridList}>
        {movieSearchList.movies != null && movieSearchList.movies.filter(movie => movie.poster_path != null).map((movie,key) => (
          <GridListTile key={key} classes={{tile : classes.gridListTile,root : classes.rootGrid}}>
            <img onClick={(e) => handleMovieTv(e,movie.id,movie.title,typeMovie,history)} src={movie.img} alt={movie.title} className={classes.image}/>
            <GridListTileBar
             classes={{
              title: classes.title,
              root: classes.tileBarRoot
            }}
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