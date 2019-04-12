import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from '../reducers';
import loggerMiddleware from '../middleware/logger';
import monitorReducerEnhancer from '../enhancers/monitorReducer';

const configureAppStore = (initialState) => {

  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    initialState,
    enhancers: [monitorReducerEnhancer]
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}

export default configureAppStore;
