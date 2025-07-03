// Import necessary functions
import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/root.reducer';
import rootSaga from './sagas/root.saga';
import logger from 'redux-logger';

const createSagaMiddleware = require('redux-saga').default;
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
