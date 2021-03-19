import { NativeSelect } from '@material-ui/core';
import React from 'react'


const SearchSelect = ({handleChange,typeMovie}) => {

    

    return(
        <>
          <NativeSelect
            value={typeMovie}
            onChange={handleChange}
          >
            <option value="movie">Film</option>
            <option value="tv">Serie</option>
          </NativeSelect>
        </>
    )
}

export default SearchSelect