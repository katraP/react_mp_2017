import React, {Component} from 'react';

import Task from '../components/Task.jsx';

class TaskList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="task-wrap">
        {this.props.data.map((item, i) => {
          return <Task key = {i} data = {item}/>
        })
        }
      </div>
    )
  }
}

export default TaskList;