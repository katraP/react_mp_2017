import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './containers/TodoList.jsx'

import data from './constants';

import '../assets/scss/styles.scss';

ReactDOM.render(<TodoList config={ {data} }/>, document.getElementById('root'));