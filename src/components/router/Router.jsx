import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ListSearchMovies, Home, DetailMovie, Login} from '..'
import { AuthContext } from '../context/contextAuth'
import Favoris from '../favoris/Favoris'


const Router = () => {



  // eslint-disable-next-line no-unused-vars
  const [state,dispatch] = useContext(AuthContext)

    return(
        <>

        
       
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/searchMovies' component={ListSearchMovies}/>
            <Route path='/detail' component={DetailMovie}/>
            <Route path='/login' component={Login}/>
            <Route path='/favoris' component={Favoris} />
        </Switch>
    
        </>
    )
}

export default Router 