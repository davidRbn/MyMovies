import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ListSearchMovies, Home, DetailMovie } from '..'

const Router = () => {


    return(
        <>
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/searchMovies' component={ListSearchMovies}/>
            <Route path='/detail' component={DetailMovie}/>
        </Switch>
        </>
    )
}

export default Router 