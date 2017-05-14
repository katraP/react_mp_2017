import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import MainRoute from '../routes/MainRoute.jsx';
import CategoryRoute from '../routes/CategoryRoute.jsx';
import EditTaskRoute from '../routes/EditTaskRoute.jsx';

import Search from '../components/Header/Search.jsx';
import ProgressBar from '../components/Header/ProgressBar.jsx';
import AddItem from '../components/Header/AddItem.jsx';

import { addNewCategory } from '../actions';

const history = createBrowserHistory();

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <Router history = {history}>
        <div>
          <div className="header">
            <div className="header-search-wrap">
              <h1 className="header__title"><Link to="/">To-Do List</Link></h1>
              <Search searchTasks={this.searchTasks}/>
            </div>
            <ProgressBar allCategories={this.props.categoriesNumber} completedCategories={this.props.completedCategories}/>
          </div>
          <AddItem addNewCategory = {this.props.addNewCategory} placeholder="Enter category title"/>
          <div className="main">
            <MainRoute/>
            <CategoryRoute/>
            {
              /*

                <DelCategoryRoute setCategoryNumber={this.setCategoryNumber} data={this.props.categories} />
                <EditTaskRoute checkCategoryStatus={this.checkCategoryStatus} data={this.props.categories}/>

               */
            }
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  categoryCounter: state.categoryCounter,
  categoriesNumber: state.categoriesNumber,
  completedCategories: state.completedCategories
});

export default connect(mapStateToProps, {
	addNewCategory
})(TodoList);