import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './containers/Home';
import OfficeList from './containers/OfficeListView';
import BranchList from './containers/BranchListView';
import OrgList from './containers/OrgListView';
import DataViz from './containers/DataVizView';


export default () => (
    <Router>
        <Switch>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/office' component={OfficeList} />
                <Route path='/branch' component={BranchList} />
                <Route path='/organization' component={OrgList} />
                <Route path='/fetch-data' component={DataViz} />
            </Layout>
        </Switch>
    </Router>
);