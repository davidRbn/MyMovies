import React from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

const IconSearch = () => {

    const styleSearchBar = {
        display: 'table-cell',
        verticalAlign: 'middle'
    } 

    return(
        <div>
            <SearchSharpIcon style={styleSearchBar}/>
        </div>
    )
}

export default IconSearch