import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import TodoList from './containers/TodoList.jsx'

import categories from './constants';

import '../assets/scss/styles.scss';

ReactDOM.render(
    <Provider store={store}>
        <TodoList config={ {categories} }/>
    </Provider>,
    document.getElementById('root')
);