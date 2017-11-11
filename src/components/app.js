import React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from '../routes';

import './app.scss';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={history}>
          <div className="app-root">
            {routes}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(App);
