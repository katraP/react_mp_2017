import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class Task extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Link to={`/category/${this.props.category}/task/${this.props.data.id}`}>
        <div className="task">
          <label><input type="checkbox" disabled checked={this.props.data.isDone ? "checked" : ""} value={this.props.data.title} />{this.props.data.title}</label>
          <button className="task__edit"></button>
        </div>
      </Link>
    )
  }
}

export default Task;