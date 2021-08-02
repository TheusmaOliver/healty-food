import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path='/register' component={Register}/>
            </Switch>        
        </BrowserRouter>
    );
}

export default Routes;