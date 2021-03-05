import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useMediaQuery } from '@material-ui/core';


const MovieList = ({movieList}) => {


const widthMobile = useMediaQuery('(max-width:400px)')
const widthMobile2 = useMediaQuery('(min-width:401px) and (max-width:500px)')
const width3 = useMediaQuery('(min-width:501px) and (max-width:649px)')
const width4 = useMediaQuery('(min-width:650px) and (max-width:849px)')
const width5 = useMediaQuery('(min-width:850px)')


    const getCols = () => {
     if (widthMobile){
            return 3
        }else if (widthMobile2){
          return 4
        }else if (width3){
            return 5
        }else if (width4){
            return 6
        }else if (width5){
            return 5
        }
    }


    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,

        },
        image:{
          height:'100%',
          width:'100%',
          position:'relative'
        },
        gridList: {
          flexWrap: 'nowrap',
          // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
          transform: 'translateZ(0)',
           
          
        },
        title: {
          color: theme.palette.primary.light,

        },
        titleBar: {
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          },
      }));
      
      // const theme = createMuiTheme({
      //   overrides: {
      //     MuiGridListTile: {
      //       root: {
      //         width:'45%',
      //         height: '240px',
      //         padding:'2px'
      //       },
      //     },
      //   },
      // });

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h3>{movieList.title}</h3>
      <GridList className={classes.gridList} cols={getCols()}>
        {movieList.movies != null && movieList.movies.map((movie) => (
          // <ThemeProvider theme={theme}>
          <GridListTile key={movie.title} >
            <img src={movie.img} alt={movie.title} className={classes.image} />
            <GridListTileBar
            //   title={movie.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${movie.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
          // </ThemeProvider>
        ))}
      </GridList>
    </div>
  );
}

export default MovieList