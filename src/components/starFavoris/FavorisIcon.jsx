import { IconButton } from '@material-ui/core'
import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/styles';

const FavorisIcon = ({isFavorite}) => {


    const stylesFavorisIcon = makeStyles(() => ({
        starBorderIcon : {
            color : 'rgb(228,181,88)'
          },
          starIcon : {
            color : 'rgb(228,181,88)'
          }  
    }))


 const classes = stylesFavorisIcon();
    return(

        <>
        <IconButton  > 
                         {/* aria-label={`star ${movie.movie.title}`} */}

                    { isFavorite() ?                  
                       
                        <StarIcon className={classes.starIcon} />                       
                       :<StarBorderIcon className={classes.starBorderIcon} />                    
                    
                     }
                    </IconButton>           
        </>
    )
}

export default FavorisIcon