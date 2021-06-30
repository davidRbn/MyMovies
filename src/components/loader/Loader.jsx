import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from '../styles/styles';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';


const Loader = () => {

    const useStyles = makeStyles({
        color :{
            color: styles.secondaryColor
        },
        root :{
            display:'grid',
            placeItems:'center',
            height:'calc(100% - 64px)'
            // margin:'auto',
            // flexDirection:'column',
            // width:'100%',
            // height:'100%',
            // top:'50vh',
            // left:'50%',
            // position:'absolute',
          
        },
        // svg:{
        //     alignItems:'center',
        //     justifyContent:'center',

        // }

    })
  
    const classes = useStyles();


    return(
        <>
        <Container classes={{
                 root : classes.root, 
        }}>
        <CircularProgress classes={{
            colorPrimary: classes.color,
            // root : classes.root,
            svg: classes.svg
        }} size='5rem'/>
        </Container>
        </>
    )
}

export default Loader