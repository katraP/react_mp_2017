import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import Modal from 'react-modal';

import { getCategory } from '../utils';

export default class EditTaskRoute extends React.Component {
  constructor(props) {
    super(props);

    this.saveTaskChanges = this.saveTaskChanges.bind(this);
  }

  saveTaskChanges(category, task, data, categoryParam, history) {
    Object.assign(task, data);

    const oldCategoryStatus = category.isDone;
    const newCategoryStatus = !category.tasks.some( item => !item.isDone);
    if(oldCategoryStatus !== newCategoryStatus ) {

      if(newCategoryStatus) {
        category.isDone = true;
        this.props.checkCategoryStatus(true);
      }
      else {
        if(oldCategoryStatus) {
          category.isDone = false;
          this.props.checkCategoryStatus(false);
        }
      }
    }

    history.push(`/category/${categoryParam}`);
  }

  render() {
    return (
      <div>
        <Route path="/category/:category/task/:task" component={({ match, history } ) => {
              const categoryParam = match.params.category;
              const taskParam = match.params.task;
              const taskCategory = getCategory(categoryParam, this.props.data).category;
              const tasksData = taskCategory.tasks;
              const task = tasksData.filter(item => {
                return item.id === taskParam;
              })[0];

              return <Modal className="modal-category" isOpen={true} contentLabel="Modal">
                      <div>
                        <h3>Edit task:</h3>
                        <input type="text" ref={(input) => {this.taskTitle = input; }} defaultValue={task.title}/>
                        <div>
                          <label><input type="checkbox" defaultChecked={task.isDone} ref={(input) => {this.taskStatus = input;}}/> Done</label>
                        </div>
                        <textarea
                        cols="30"
                        rows="10"
                        ref={(input) => {this.taskDescription = input; }}
                        defaultValue={task.description}></textarea>
                      </div>
                      <button onClick={() => {
                        this.saveTaskChanges(taskCategory, task,
                          {
                            title: this.taskTitle.value,
                            description: this.taskDescription.value,
                            isDone: this.taskStatus.checked
                          },
                          categoryParam,
                          history);
                        }}
                      >Save changes</button>
                      <Link to={`/category/${categoryParam}`}>
                        <button>Cancel</button>
                      </Link>
                    </Modal>
              }}
          />
      </div>
    );
  }
}
