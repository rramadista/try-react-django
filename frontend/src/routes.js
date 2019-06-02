import React from 'react';
import { Route } from 'react-router-dom';

import Home from './containers/Home';
import OfficeList from './containers/OfficeListView';
import OfficeCreate from './containers/OfficeCreateView';
import OfficeDetail from './containers/OfficeDetailView';
import BranchList from './containers/BranchListView';
import OrgList from './containers/OrgListView';
import DataViz from './containers/DataVizView';
import ChartViz from './containers/ChartView';

const BaseRouter = props => (
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/office' component={OfficeList} />
        <Route path='/create' component={OfficeCreate} />
        <Route path='/office/:id' component={OfficeDetail} />
        <Route path='/branch' component={BranchList} />
        <Route path='/organization' component={OrgList} />
        <Route path='/dashboard' component={ChartViz} />
        <Route path='/fetch-data' component={DataViz} />
    </div>
);

export default BaseRouter;