import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Route1 from './components/Route1/Route1';
import Route2 from './components/Route2/Route2';
import Route3 from './components/Route3/Route3';

export default (
    <Switch>
        <Route exact path="/what" component={Route1} />
        <Route exact path="/who" component={Route2} />
        <Route exact path="/why" component={Route3} />
    </Switch>
)