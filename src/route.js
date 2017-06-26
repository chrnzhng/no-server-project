import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';

import Main from './components/Main/Main';
import Video from "./components/Video/Video";

export default (
    <Switch>
        <Route component={ App } path='/' exact/>        
        <Route component={ Video } path='/video'/>
    </Switch>
)