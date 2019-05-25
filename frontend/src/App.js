import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Layout from './containers/Layout';
import BaseRouter from './routes';


export default () => (
    <Router>
        <Switch>
            <Layout>
                <BaseRouter />
            </Layout>
        </Switch>
    </Router>
);