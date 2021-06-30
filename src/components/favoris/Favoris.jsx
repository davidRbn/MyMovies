import { List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import apiFavoris from '../conf/api.Favoris'
import Loader from '../loader/Loader'
import styles from '../styles/styles'

const Favoris = () => {

     const [favoris1,setFavoris1] = useState([])
     const idUser = localStorage.getItem('user')
     const [isLoaded, setLoaded] = useState(false)


            const getFavoris = useCallback( () =>{ apiFavoris.get(`/favoris/${idUser}`)
            .then(res => {
                setFavoris1(res.data)
                setLoaded(true)
                })},[idUser])

                useEffect(() => {
                  getFavoris()
                },[getFavoris])


                const stylesSearchMovie = {
                    gridList:{
                        justifyContent:'center'
                        
                    },
                    gridListTile:{
                      width:'150px',
                      height:'250px',
                      marginTop:'70px',
                      marginRight:'20px'
                    },
                    image:{
                      cursor: 'pointer'
                    },
                    title : {
                        fontSize: '50px'
                    },
                    typo :{
                      color: styles.secondaryColor,
                      marginTop: '20px'
                    },
                    textError:{
                      color: styles.secondaryColor,
                      textAlign:'center',
                      marginTop:'50vh',
                      transform:'translateY(-50%)'
                    }
                  }

                  const useStyles = makeStyles({
                    root: {
                      
                      color: 'red',
                      
                    },
                    label: {
                      textTransform: 'capitalize',
                    },
                  });
                  const classes = useStyles();


    return (
         <>
               
           
           {  !isLoaded ? <Loader/> : favoris1.error ? <p style={stylesSearchMovie.textError}>{favoris1.error}</p> : favoris1.map((movie,index) =>  
               
                    <List key={index}>
                 <ListItem >
                 <img  src={movie.img} alt={movie.title} style={stylesSearchMovie.gridListTile} />
                   <ListItemText
                     primary={`${movie.title}`}
                     classes={{
                      root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    
                    }}
                    className='test'
                     secondary={
                       <React.Fragment >
                         <Typography
                           component="span"
                           variant="body2"
                           style={stylesSearchMovie.typo}
                         >
                           {`${movie.details}`}
                         </Typography >
                         <Typography style={stylesSearchMovie.typo}>{`${movie.description}`}</Typography>
                         
                       </React.Fragment>
                     }
                   />
                    </ListItem>
                   </List>
              
                    )}

         </>
    )
            }

export default Favoris


     /* <GridList style={stylesSearchMovie.gridList} >
        {favoris.length === 0 ? console.log('chargement') : favoris.map((movie,key) => (
          <GridListTile key={key} style={stylesSearchMovie.gridListTile} >
            <img  src={movie.img} alt={movie.title} />
            <GridListTileBar
              title={movie.title}
              actionIcon={
                <IconButton aria-label={`star ${movie.title}`}>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>  */