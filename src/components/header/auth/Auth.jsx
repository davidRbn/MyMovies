import React, { useContext } from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/contextAuth';
import PersonIcon from '@material-ui/icons/Person';

const Auth = ({closeSearchBar}) => {
   
    let history = useHistory()
    // eslint-disable-next-line no-unused-vars
    const [state,dispatch] = useContext(AuthContext)


const openAuth = (e) => {
    e.preventDefault()
    // e.stopPropagation()
    history.push('/login')
    closeSearchBar()
}


    return(
        <> 
         {  state.isAuthenticated ?
         <>
             <PersonIcon/>
        </>
             :
             <PersonOutlineIcon onClick={e => openAuth(e)}/>
         }
            
        </>
    )
}

export default Auth