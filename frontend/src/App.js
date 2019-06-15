import React from 'react';
import { Provider } from 'react-redux';
import store from './services/stores/configStore'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Layout from './containers/Layout';
import BaseRouter from './routes';


export default () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Layout>
                    <BaseRouter />
                </Layout>
            </Switch>
        </Router>
    </Provider>
);