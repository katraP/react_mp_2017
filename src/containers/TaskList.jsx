import React, {Component} from 'react';

import Task from '../components/Task.jsx';
import AddItem from '../components/Header/AddItem.jsx';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="task-list">
        <AddItem getNewTask = {this.props.getNewTask} placeholder="Text input with button" />
        <div className="task-wrap">
          {
            this.props.data.length ? (
              'There is no tasks yet...'
            ) :
              this.props.data.map((item, i) => {
                return <Task key = {i} data = {item}/>
              })
          }

        </div>
      </div>
    )
  }
}

export default TaskList;