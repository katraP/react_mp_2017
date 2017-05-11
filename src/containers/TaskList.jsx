import React, {Component} from 'react';

import Task from '../components/Task.jsx';
import AddItem from '../components/Header/AddItem.jsx';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-list">
        <AddItem
          getNewCategory = {this.props.addNewTask}
          categoryId = {this.props.category}
          placeholder="Enter new task title"
          history={this.props.history}/>
        <div className="task-wrap">
          {
            !this.props.data.length ? (
              'There is no tasks yet...'
            ) :
              this.props.data.map((item, i) => {
                return <Task key = {i} data = {item} category = {this.props.category}/>
              })
          }
        </div>
      </div>
    )
  }
}

export default TaskList;