import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Members from '../pages/Members';
import Services from '../pages/ServicesPage';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Routes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/members/:url" component={Members} />
                <Route path="/our-services" component={Services} />
                <Route path="*" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;