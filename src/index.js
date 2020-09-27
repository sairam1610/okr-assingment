import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import { watchOKRListSaga } from './store/sagas/index'
import OKRReducer from './store/reducers/OKRList'

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const rootReducer = combineReducers({
    OKRListState: OKRReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchOKRListSaga);

const app = (
        <Provider store={store}>
            <App></App>
        </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
