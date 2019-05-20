import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './components/Home';
import Office from './components/Office';
import Branch from './components/Branch';


export default () => (
    <Router>
        <Switch>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/office' component={Office} />
                <Route path='/branch' component={Branch} />
            </Layout>
        </Switch>
    </Router>
);
