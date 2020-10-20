import React, { FC, ReactElement } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const App: FC = (): ReactElement => (
    <Router>
        <Switch>
            <Route path="/" exact>
                <h1>Home page!</h1>
            </Route>
            <Route path="/about" exact>
                <h1>About page!</h1>
            </Route>
            <Route path="*">
                <h1>Not found</h1>
            </Route>
        </Switch>
    </Router>
);

export default App;