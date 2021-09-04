import { createStore, combineReducers, applyMiddleware } from 'redux';
import themeDuck from './ducks/themeDuck';
import notesDuck from './ducks/notesDuck';
import modalDuck from './ducks/modalDuck';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga/rootSaga';

// all reducers are combined into 1 reducer, the rootReducer
const rootReducer = combineReducers({
    themeDuck,
    notesDuck,
    modalDuck
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]; //This is to store multiple middlewares into an array

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

// sets up the listener, forever AFAIK
sagaMiddleware.run(rootSaga);

export default store;
