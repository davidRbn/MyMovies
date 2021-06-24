import React, { useContext } from 'react'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { AuthContext } from '../../context/contextAuth';
import styles from '../../styles/styles'
import { useHistory } from 'react-router-dom';



const AuthDisconnect = () => {


    // eslint-disable-next-line no-unused-vars
    const [state,dispatch] = useContext(AuthContext)
    let history = useHistory()

    const authDisconnection = (e) => {
        e.preventDefault()
        history.push('/')
        dispatch({type: "LOGOUT"})
        console.log('deconnection')
      }

    return(
        <>
        <ExitToAppOutlinedIcon style={{color:styles.secondaryColor}} onClick={e => authDisconnection(e)}/>
        </>

    )
}

export default AuthDisconnect