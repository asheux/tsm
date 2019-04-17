import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import './main.css';
import AppRoutes from './routes';
import configureAppStore from './redux/store';
import initialState from './redux/reducers/initialState';
import * as serviceWorker from './serviceWorker';

const bugsnagClient = bugsnag('c15c7aa9ea65a456bb72ae91b0ffd859');
bugsnagClient.use(bugsnagReact, React);
const store = configureAppStore(initialState);
// wrap the entire app tree in the ErrorBoundary
const ErrorBoundary = bugsnagClient.getPlugin('react')

const renderApp = (props) => render(
  <ErrorBoundary>
    <Provider store={store}>
      <AppRoutes {...props} />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./routes', renderApp);
}

renderApp();
serviceWorker.register();
