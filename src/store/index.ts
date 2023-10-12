import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// import {createLogger} from 'redux-logger';

import rootReducer from './reducers';
import sagas from './sagas';

const ConfigureStore = () => {
  let composeEnhancers = compose;
  if (__DEV__) {
    composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  return {
    persistor,
    store,
  };
};

export const {store, persistor} = ConfigureStore();
