import React, { FC, ReactElement } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import style from './style.module.css';

const App: FC = (): ReactElement => (
    <Router>
        <p><Link to="/">home</Link></p>
        <p><Link to="/about">about</Link></p>
        <p><Link to="/profile">profile</Link></p>
        <Switch>
            <Route path="/" exact>
                <h1>Home page!</h1>
            </Route>
            <Route path="/about" exact>
                <h1>About page!</h1>
            </Route>
            <Route path="*">
                <h1 className={style.red}>Not found</h1>
            </Route>
        </Switch>
    </Router>
);

export default App;