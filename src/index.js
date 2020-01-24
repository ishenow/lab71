import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import dishesReducer from "./store/reducers/dishesReducer";
import ordersReducer from "./store/reducers/ordersReducer";

const rootReducer = combineReducers({
    d: dishesReducer,
    o: ordersReducer,
});

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

