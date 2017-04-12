import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { showApp } from './actions/app.actions';

import store from './store';
import routes from './routes';

const onRouteUpdate = () => {
  let state = store.getState();
  if (state.appConfig.hidden) {
    store.dispatch()
  }
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('#react-raq'));
