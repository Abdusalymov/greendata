import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import addEmploeey from './store/reuducers/addEmploeey'

import CatalogEmployees from './compontens/CatalogEmployees';

const store = createStore(addEmploeey, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <CatalogEmployees />
    </Provider>,
    document.getElementById('root')
);
