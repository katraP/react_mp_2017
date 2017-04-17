import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './containers/TodoList.jsx'

import categories from './constants';

import '../assets/scss/styles.scss';

ReactDOM.render(<TodoList config={ {categories} }/>, document.getElementById('root'));