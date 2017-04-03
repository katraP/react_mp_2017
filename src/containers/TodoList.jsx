import React, {Component} from 'react';

import Header from './Header.jsx'
import CategoryList from './CategoryList.jsx'
import TaskList from './TaskList.jsx'

class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {activeCategory: 0};
    this.data = this.props.config.data;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <CategoryList data={this.data.categories}/>
          <TaskList data={this.data.categories[this.state.activeCategory].tasks} />
        </div>
      </div>
    )
  }
}

export default TodoList;