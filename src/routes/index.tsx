import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import About from '../pages/About';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;