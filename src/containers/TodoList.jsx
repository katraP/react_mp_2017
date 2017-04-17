import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from '../components/Header/Search.jsx';
import ProgressBar from '../components/Header/ProgressBar.jsx';
import AddItem from '../components/Header/AddItem.jsx';
import CategoryList from './CategoryList.jsx'


class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {categoryCounter: 6, categories: this.props.config.categories};

    this.getNewCategory = this.getNewCategory.bind(this);
  }

  getNewCategory(value) {
    const categories = this.state.categories;
    let counter = this.state.categoryCounter;

    categories.unshift(
      {
        id: ++counter,
        isActive: false,
        isDone: false,
        title: value,
        subCategories: [],
        tasks: []
      }
    );
    this.setState({
      categoryCounter: counter,
      categories
    });

  }

  render() {
    const _this = this;

    return (
      <Router>
        <div>
          <div className="header">
            <div className="header-search-wrap">
              <h1 className="header__title">To-Do List</h1>
              <Search />
            </div>
            <ProgressBar />
          </div>
          <Route path="/" component= {({ params } ) => {
            return <CategoryList data = {_this.state.categories} getNewCategory = {_this.getNewCategory}/>
          }} />
        </div>
      </Router>
    )
  }
}

export default TodoList;