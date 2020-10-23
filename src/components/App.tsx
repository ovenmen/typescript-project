import React, { FC, ReactElement } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const App: FC = (): ReactElement => (
    <Router>
        <p><Link to="/">home</Link></p>
        <p><Link to="/about">about</Link></p>
        <p><Link to="/profile">profile</Link></p>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about" exact>
                <About />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
);

export default App;