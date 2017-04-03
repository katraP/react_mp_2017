import React, {Component} from 'react';

class Task extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="task">
        <label><input type="checkbox" value={this.props.data.title} />{this.props.data.title}</label>
        <button className="task__edit"></button>
      </div>
    )
  }
}

export default Task;