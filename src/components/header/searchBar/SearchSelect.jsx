import { makeStyles, NativeSelect } from '@material-ui/core';
import React from 'react'
import FormControl from '@material-ui/core/FormControl';

const SearchSelect = ({handleChange,typeMovie}) => {

    const useStyles = makeStyles((theme) => ({
      select:{
           backgroundColor:'#525151',
           border:'1px solid white',
           color:'white'
      },
      option:{
        color:'grey',
        backgroundColor:'#525151'
      }
    }))
 
 
  const classes = useStyles();

    return(
        <>
        <FormControl>
          <NativeSelect
            value={typeMovie}
            onChange={handleChange}
            className={classes.select}
          >
            <option className={classes.option}  value="movie">Film</option>
            <option className={classes.option}  value="tv">Serie</option>
          </NativeSelect>
          </FormControl>
        </>
    )
}

export default SearchSelect