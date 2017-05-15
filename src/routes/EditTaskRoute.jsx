import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

import { getCategory } from '../utils';
import { editTask } from '../actions';
class EditTaskRoute extends React.Component {
  constructor(props) {
    super(props);

    this.saveTaskChanges = this.saveTaskChanges.bind(this);
  }

  saveTaskChanges(task, data, categoryParam, history) {
    this.props.editTask({
      task,
      data,
      categoryParam,
    });
    history.push(`/category/${categoryParam}`);
  }

  render() {
    return (
      <div>
        <Route
          path="/category/:category/task/:task" component={({ match, history }) => {
            const categoryParam = match.params.category;
            const taskParam = match.params.task;
            const taskCategory = getCategory(categoryParam, this.props.categories).category;
            const tasksData = taskCategory.tasks;
            const task = tasksData.filter(item => item.id === taskParam)[0];
            return (<Modal className="modal-category" isOpen={true} contentLabel="Modal">
              <div>
                <h3>Edit task:</h3>
                <input
                  type="text" ref={(input) => {
                    this.taskTitle = input;
                  }} defaultValue={task.title}
                />
                <div>
                  <label>
                    <input type="checkbox" defaultChecked={task.isDone} ref={(input) => { this.taskStatus = input; }} /> Done
                  </label>
                </div>
                <textarea
                  cols="30"
                  rows="10"
                  ref={(input) => {
                    this.taskDescription = input;
                  }}
                  defaultValue={task.description}
                />
              </div>
              <button
                onClick={() => {
                  this.saveTaskChanges(task,
                    {
                      title: this.taskTitle.value,
                      description: this.taskDescription.value,
                      isDone: this.taskStatus.checked,
                    },
                    categoryParam,
                    history);
                }}
              >
                Save changes
              </button>
              <Link to={`/category/${categoryParam}`}>
                <button>Cancel</button>
              </Link>
            </Modal>);
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categories,
});
export default withRouter(connect(mapStateToProps, {editTask})(EditTaskRoute));