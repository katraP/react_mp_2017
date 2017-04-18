import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom';


import Category from '../components/Category.jsx'
import TaskList from './TaskList.jsx'
import AddItem from '../components/Header/AddItem.jsx';

import Modal from 'react-modal';

import { getCategory } from '../utils';

class CategoryList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categoryChange: {
        isModalOpen: false
      }
    };

    this.data = this.props.data;
    this.changeCategory = this.changeCategory.bind(this);
    this.closeCategoryModal = this.closeCategoryModal.bind(this);
    this.saveCategoryChanges = this.saveCategoryChanges.bind(this);
    this.saveTaskChanges = this.saveTaskChanges.bind(this);
  }

  changeCategory(categoryChange) {
    this.setState(categoryChange);
  }

  closeCategoryModal() {
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        categoryChange: {
          isModalOpen: false
        }});
    });
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

    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        categoryChange: {
          isModalOpen: false
        }});
    });
  }

  saveTaskChanges(task, data, categoryParam, history) {
    Object.assign(task, data);

    history.push(`/category/${categoryParam}`);
  }

  render() {

    return (
      <div className="main">
        <div>
          <AddItem getNewCategory = {this.props.getNewCategory} placeholder="Enter category title"/>
            <div className="category-wrap">

              {this.data.map((item, i) => {
                return (
                    <Category key = {i} data = {item} changeCategory={this.changeCategory}/>
                )
              })
              }
            </div>
        </div>

        <Route path="/category/:category" component={({ match } ) => {
            const categoryParam = match.params.category;
            const tasksData = getCategory(categoryParam, this.data).tasks;
            return <TaskList data = {tasksData} category={categoryParam} />
          }} />

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
          }} />

        <Modal
          className="modal-category"
          isOpen={this.state.categoryChange.isModalOpen}
          contentLabel="Modal"
          >
          <span onClick={this.closeCategoryModal}>&#10060;</span>
          <h3>Category name:</h3>
          <input type="text" ref={(input) => { this.modalCatField = input; }} defaultValue={this.state.categoryChange.categoryName}/>
          <button onClick={this.saveCategoryChanges}>Save</button>
        </Modal>
      </div>
    )

  }
}

export default CategoryList;