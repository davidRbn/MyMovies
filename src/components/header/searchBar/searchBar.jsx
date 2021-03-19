import { InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import SearchSelect from './SearchSelect';

const SearchBar = () => {

   const [searchValue,setSearchValue] = useState('')
   const [typeMovie,setTypeMovie] = useState('movie')
   let history = useHistory()

   const handleChange = event => {
        setTypeMovie(event.target.value);
      };

    const useStyles = makeStyles((theme) => ({
        root: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width:'300px'
        },
        input: {
          marginLeft: theme.spacing(1),
          flex: 1,
        },
        iconButton: {
          padding: 10,
        },
        divider: {
          height: 28,
          margin: 4,
        },
      }));

      const classes = useStyles();

      const submit = (e) => {
           e.preventDefault()
            history.push({
            pathname: '/searchMovies',
            search:`?${searchValue}`,
            state:{searchValue,typeMovie}
        })
       return setSearchValue('')
      }

    return(
        <>
             <Paper component="form" onSubmit={submit}  className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Recherche"
        inputProps={{ 'aria-label': 'Recherche' }}
        value={searchValue}
        onChange={e => {
          setSearchValue(e.target.value)}}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <SearchSelect handleChange={handleChange} typeMovie={typeMovie}/>
    </Paper>
        </>
    )
}

export default SearchBar