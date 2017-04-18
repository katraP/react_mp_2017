import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Search from '../components/Header/Search.jsx';
import ProgressBar from '../components/Header/ProgressBar.jsx';
import AddItem from '../components/Header/AddItem.jsx';
import CategoryList from './CategoryList.jsx'
import TaskList from './TaskList.jsx'

import { getCategory } from '../utils';

import Modal from 'react-modal';

const history = createBrowserHistory();
class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryCounter: 6,
      categories: this.props.config.categories
    };
    this.data = this.props.config.categories;


    this.saveCategoryChanges = this.saveCategoryChanges.bind(this);
    this.saveTaskChanges = this.saveTaskChanges.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(categoryChange) {
    this.setState(categoryChange);
  }

  saveCategoryChanges() {
    const categoryState = this.state.categoryChange;
    const currentCategory = getCategory(categoryState.categoryId, this.data);

    if(categoryState.action == 'edit') {
      currentCategory.title=this.modalCatField.value;
    }
    else {
      currentCategory.subCategories.unshift(
        {
          id: `${categoryState.categoryId}.${currentCategory.subCategories.length + 1}`,
          isActive: false,
          isDone: false,
          title: this.modalCatField.value,
          subCategories: [],
          tasks: []
        }
      )
    }
  }

  saveTaskChanges(task, data, categoryParam, history) {
    Object.assign(task, data);

    history.push(`/category/${categoryParam}`);
  }

  getNewCategory(value) {
    const categories = this.state.categories;
    let counter = this.state.categoryCounter;

    categories.unshift(
      {
        id: (++counter).toString(),
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

    return (
      <Router history = {history}>
        <div>
          <div className="header">
            <div className="header-search-wrap">
              <h1 className="header__title"><Link to="/">To-Do List</Link></h1>
              <Search />
            </div>
            <ProgressBar />
          </div>
          <AddItem getNewCategory = {this.getNewCategory} placeholder="Enter category title"/>
          <div className="main">
            <Route path="/" component= {({ params } ) => {
                return <CategoryList
                data = {this.data}
                getNewCategory = {this.getNewCategory}/>
              }}
            />

            <Route path="/category/:category" component={({ match } ) => {
                const categoryParam = match.params.category;
                const tasksData = getCategory(categoryParam, this.data).tasks;

                return <TaskList data = {tasksData} category={categoryParam} />
              }}
            />
            <Route path="/category/:category/edit" component={({ match } ) => {
                const categoryParam = match.params.category;
                const category = getCategory(categoryParam, this.data);

                return <Modal
                  className="modal-category"
                  isOpen={true}
                  contentLabel="Modal"
                  >
                  <Link to={`/category/${categoryParam}`}>&#10060;</Link>
                  <h3>Category name:</h3>
                  <input type="text" ref={(input) => { this.modalCatField = input; }} defaultValue={category.title}/>
                  <button onClick={this.saveCategoryChanges}>Save</button>
                </Modal>
              }}
              />

            <Route path="/category/:category/task/:task" component={({ match, history } ) => {
              const categoryParam = match.params.category;
              const taskParam = match.params.task;

              const tasksData = getCategory(categoryParam, this.data).tasks;
              const task = tasksData.filter(item => {
                return item.id === taskParam;
              })[0];

              return <Modal
                          className="modal-category"
                          isOpen={true}
                          contentLabel="Modal"
                          >
                          <Link to={`/category/${categoryParam}`}>&#10060;</Link>
                          <button onClick={() => {
                            this.saveTaskChanges(task,
                            {
                            title: this.taskTitle.value,
                            description: this.taskDescription.value
                            },
                            categoryParam,
                            history);
                          }}>Save changes</button>
                          <Link to={`/category/${categoryParam}`}>
                            <button>Cancel</button>
                          </Link>
                          <div>
                            <input type="text" ref={(input) => {this.taskTitle = input; }} defaultValue={task.title}/>
                            <label><input type="checkbox"/> Done</label>
                            <textarea cols="30" rows="10" ref={(input) => {this.taskDescription = input; }} defaultValue={task.description}></textarea>
                          </div>

                        </Modal>
              }}
            />
          </div>
        </div>


      </Router>
    )
  }
}

export default TodoList;