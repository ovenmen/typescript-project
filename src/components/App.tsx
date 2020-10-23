import React, { FC, lazy, Suspense } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navigation from './Navigation';
import Spinner from './Spinner';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App: FC = () => (
    <Container textAlign='justified'>
        <Navigation />
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Suspense>
    </Container>
);

export default App;