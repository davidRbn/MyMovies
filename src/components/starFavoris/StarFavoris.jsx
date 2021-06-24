import { GridListTileBar, IconButton} from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import apiFavoris from '../conf/api.Favoris';
import { AuthContext } from '../context/contextAuth';
import ModalFavoris from './modalFavoris/ModalFavoris';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';

const StarFavoris = (movie) => {

     const [favorisChange,setFavorisChange ] = useState(true)

     // eslint-disable-next-line no-unused-vars
     const [,setFavorisValidation ] = useState({})
     const [favoris, setFavoris] = useState([])
     // eslint-disable-next-line no-unused-vars
     const [state,dispatch] = useContext(AuthContext)
     
     const tokenUser = localStorage.getItem('token')
    //  const _isMounted = useRef(true);
    const [favorisModal,setFavorisModal] = useState(false)


     
    const stylesFavoris = makeStyles(() => ({
        title:{
            fontSize:'12px',
            color: styles.secondaryColor
               },
        starBorderIcon : {
            color : 'rgb(228,181,88)'
          },
          starIcon : {
            color : 'rgb(228,181,88)'
          }  
    }))
            
       
    const getFavoris = useCallback( async () =>{await apiFavoris.get(`/favoris/${state.user}`)
            .then(res => {
                if (favorisChange){
                setFavoris(res.data)
            }
                })
                
       },[favorisChange, state.user])
    
       
    const isFavorite = useCallback( () => {
        let isFavorite = false
        if (favoris.length > 0){
         let fav = favoris.filter(fav => fav.idMovie === `${movie.movie.id}`)
  if (fav.length > 0){
      isFavorite = true
  }else{
      isFavorite = false
  }}
       return isFavorite

    },[favoris,movie.movie.id])

    useEffect(() => {
            isFavorite()
            getFavoris()
        return () => setFavorisChange(false)
   },[favoris.length, favorisChange, getFavoris, isFavorite])

//     useEffect(() => {
//         isFavorite()
        
// },[isFavorite])

      
   const handleModalFavoris = () => {
        return setFavorisModal(!favorisModal)
   }


    const postFavoris = async (e) => {
         e.preventDefault()
         if (state.isAuthenticated){
            await apiFavoris.post('/favoris',{
                idMovie : movie.movie.id,
                img : movie.movie.img,
                title: movie.movie.title,
                details : movie.movie.details,
                description : movie.movie.description,
                typeMovie: movie.typeMovie,
                userId: state.user,
          },{headers : {'Authorization' : tokenUser}}).then(res => console.log(res))
          setFavorisChange(true)
         }else{
            handleModalFavoris()
         }
    
    }
   

    const deleteFavoris = async (e) => {
        e.preventDefault()
       await apiFavoris.delete(`/favoris/${movie.movie.id}/${state.user}`)
            .then(res => setFavorisValidation(res) )
      setFavorisChange(true)      
    }


    const classes = stylesFavoris();
 
    return(
        <>
            {  
            <GridListTileBar
            classes={{
                title: classes.title,
              }}
              onClick ={isFavorite()? e => deleteFavoris(e):e => postFavoris(e)}
              title={movie.movie.title}
              actionIcon={
                
                     <IconButton  > 
                         {/* aria-label={`star ${movie.movie.title}`} */}

                    { isFavorite() ?                  
                       
                        <StarIcon className={classes.starIcon} />                       
                       :<StarBorderIcon className={classes.starBorderIcon} />                    
                    
                     }
                    </IconButton>           
                    
              }
            />}
            {<ModalFavoris favorisModal={favorisModal} handleModalFavoris={handleModalFavoris}/>}
        </>

    )
}

export default StarFavoris 