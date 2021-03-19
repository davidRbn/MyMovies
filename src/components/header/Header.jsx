import React, { useState } from 'react'
import IconSearch from './searchBar/IconSearch'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Auth from './auth/Auth';
import SearchBar from './searchBar/searchBar';
import { Link } from 'react-router-dom';


const Header = () => {
 
    const [searchBar,setSearchBar] = useState(false)
 

    const searchBarDisplay = (e) => {
           e.preventDefault()
            setSearchBar(!searchBar)
    }


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
          
        },
      }));  
    
      const classes = useStyles();

      return (
          <>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
              <Link style={{color:'#fff',textDecoration:'none'}} to='/'>MYmovies</Link>  
              </Typography>
              <Button onClick={e => searchBarDisplay(e)} color="inherit"><IconSearch/></Button>
              <Button color="inherit"><Auth/></Button>
            </Toolbar>
          </AppBar>
        </div>
        {searchBar&&<SearchBar/>}
        </>
      );
}

export default Header