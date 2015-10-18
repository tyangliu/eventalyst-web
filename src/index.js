'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { App, Home, Events, EventSingle } from './components';

React.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='events' component={Events} />
      <Route path='events/:eventId' component={EventSingle} />
    </Route>
  </Router>,
  document.getElementById('root')
);
