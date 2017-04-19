import React, {Component} from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import MainRoute from '../routes/MainRoute.jsx';
import CategoryRoute from '../routes/CategoryRoute.jsx';
import EditCategoryRoute from '../routes/EditCategoryRoute.jsx';
import AddCategoryRoute from '../routes/AddCategoryRoute.jsx';
import DelCategoryRoute from '../routes/DelCategoryRoute.jsx';
import EditTaskRoute from '../routes/EditTaskRoute.jsx';

import Search from '../components/Header/Search.jsx';
import ProgressBar from '../components/Header/ProgressBar.jsx';
import AddItem from '../components/Header/AddItem.jsx';
import CategoryList from './CategoryList.jsx';


import { getCategory } from '../utils';

import Modal from 'react-modal';

const history = createBrowserHistory();

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryCounter: 0,
      categoriesNumber: 0,
      completedCategories: 0,
      activeCategory: ''
    };
    this.data = {
      categories: []
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.getNewCategory = this.getNewCategory.bind(this);
    this.checkCategoryStatus = this.checkCategoryStatus.bind(this);
    this.setCategoryNumber = this.setCategoryNumber.bind(this);
    this.searchTasks = this.searchTasks.bind(this);
  }

  searchTasks(searchQuery, taskStatus) {

    const searchValue = searchQuery;
    const pathname = location.pathname;

    taskStatus = (taskStatus) ? 'complete' : 'incomplete';

    if(pathname === '/') {
      return false;
    }

    const currrentCategory = pathname.split('/')[2];
    if(searchValue.trim() === '') {

      return history.push(`/category/${currrentCategory}`);
    }

    return history.push(`/category/${currrentCategory}/search/${searchValue}/taskStatus/${taskStatus}`);
  }

  addNewTask(value, categoryId) {
    const currentCategory = getCategory(categoryId, this.data.categories).category;
    let completedCategories = this.state.completedCategories;

    if(completedCategories > 0 && currentCategory.isDone) {
      completedCategories--;

      this.setState({
        completedCategories
      });
    }

    currentCategory.isDone = false;
    currentCategory.tasks.unshift(
      {
        id: (currentCategory.tasks.length + 1).toString(),
        isDone: false,
        title: value,
        description: ''
      }
    );

    history.push(`/category/${categoryId}`);
  }

  checkCategoryStatus(value) {
    let completedCategories = this.state.completedCategories;

    if(value) {
      completedCategories++;
    }
    else {
      if(completedCategories > 0) {
        completedCategories--;
      }
    }
    this.setState({
      completedCategories
    })
  }

  setCategoryNumber(value) {
    let categoriesNumber = this.state.categoriesNumber;
    let completedCategories = this.state.completedCategories;

    if(value) {
      categoriesNumber++;
      completedCategories++;
    }
    else {
      categoriesNumber--;
      if(completedCategories !==0 ) {
        completedCategories--;
      }
    }

    this.setState({categoriesNumber, completedCategories});
  }


  getNewCategory(value) {
    const categories = this.data.categories;
    let counter = this.state.categoryCounter;

    categories.unshift(
      {
        id: (++counter).toString(),
        isActive: false,
        isDone: true,
        title: value,
        subCategories: [],
        tasks: []
      }
    );
    this.setState({
      categoryCounter: counter
    });

    this.setCategoryNumber(true);

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
            <ProgressBar allCategories={this.state.categoriesNumber} completedCategories={this.state.completedCategories}/>
          </div>
          <AddItem getNewCategory = {this.getNewCategory} placeholder="Enter category title"/>
          <div className="main">
            <MainRoute
              data={this.data.categories}
              getNewCategory = {this.getNewCategory}
            />
            <CategoryRoute
              data={this.data.categories}
              addNewTask={this.addNewTask}
              setActiveCategory={this.setActiveCategory}
            />
            <EditCategoryRoute data={this.data.categories} />
            <AddCategoryRoute setCategoryNumber={this.setCategoryNumber} data={this.data.categories} />
            <DelCategoryRoute setCategoryNumber={this.setCategoryNumber} data={this.data.categories} />
            <EditTaskRoute checkCategoryStatus={this.checkCategoryStatus} data={this.data.categories}/>
          </div>
        </div>


      </Router>
    )
  }
}

export default TodoList;