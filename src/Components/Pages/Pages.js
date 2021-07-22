import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import AllU from '../AllU/AllUsers'
import EachU from '../EachU/EachUser'
//import CreatePost from '../CreatePost/CreatePost'
//                    <Route path='/createpost/:userid' component={CreatePost} exact />


export default function Pages() {  
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Homepage} exact />
                    <Route path='/users' component={AllU} exact />
                    <Route path='/user/:userid' component={EachU} exact />
                </Switch>
            </BrowserRouter>
        </div>
    )
}