import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Members from '../pages/Members';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/members/:url" component={Members} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;