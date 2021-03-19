import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router';
import  {detailMovie, detailTv} from '../../conf/detail.movie';



const MovieList = ({movieList}) => {

  let history = useHistory()
  
  
    // const themeMovieList = createMuiTheme({
    //   overrides: {
    //     MuiGridListTile: {
    //       root: {
    //         width:'170px',
    //         height: '230px',
    //         padding:'2px'
    //       },
    //     },
    //   },
    // });
     
    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       display: 'flex',
    //       flexWrap: 'wrap',
    //       justifyContent: 'space-around',
    //       overflow: 'hidden',
    //       backgroundColor: theme.palette.background.paper

    //     },
    //     image:{
    //       height:'100%',
    //       width:'100%',
    //       position:''
    //     },
    //     gridList: {
    //       flexWrap: 'nowrap',
    //       // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //       transform: 'translateZ(0)',
           
          
    //      },
    //     title: {
    //       color: 'white',

    //     },
    //     titleBar: {
    //       background:
    //         'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    //       },
    //   }));
      
   
    const stylesMovieList = {
      root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',    
            },
      gridList:{
        flexWrap:'nowrap'
      },
      gridListTile:{
        width:'150px',
        height:'250px',
        margin:'10px'
      },
      image:{
        width:'100%',
        height:'100%',
        cursor: 'pointer'
      }      
    }

    
 const handleMovieTv = (e,id,title) => {
  e.preventDefault()
    switch(movieList.typeMovie){
      case'movie':
        detailMovie(id,title,movieList.typeMovie,history);  
        break; 
      case'tv':
       detailTv(id,title,movieList.typeMovie,history)
       break;
       default:
         console.error()
    }
  }
   
  // const classes = useStyles();

  return (
        <div style={stylesMovieList.root}>
        <h3>{movieList.title}</h3>
      <GridList style={stylesMovieList.gridList} >
        {movieList.movies != null && movieList.movies.map((movie,key) => (
          <GridListTile key={key} style={stylesMovieList.gridListTile} >
            <img onClick={(e) => handleMovieTv(e,movie.id,movie.title) } src={movie.img} alt={movie.title} style={stylesMovieList.image}/>
            <GridListTileBar
              title={movie.title}
              actionIcon={
                <IconButton aria-label={`star ${movie.title}`}>
                  <StarBorderIcon/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </div>
  );
}

export default MovieList