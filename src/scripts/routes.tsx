import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import ContentWrapper from './views/ContentWrapper';
import NoMatchView from './views/NoMatchView';
import HomeView from './views/HomeView';
import PageView from './views/PageView';

var routeMap = (
    <Route path='/' component={ContentWrapper}>
        <IndexRoute component={HomeView}/>
        <Route path='page' component={PageView}/>
        <Route path='*' component={NoMatchView} />
    </Route>
);

export default routeMap;