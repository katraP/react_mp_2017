import React, {Component} from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task.jsx';
import AddItem from '../components/Header/AddItem.jsx';

import {getCategory} from '../actions';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

		if(!this.props.category.tasks.length) {
			return (
        <div className="task-list">
          <AddItem
            categoryId = {this.props.category.id}
            placeholder="Enter new task title"
            history={this.props.history}/>
          <div className="task-wrap">
            'There is no tasks yet...'
          </div>
        </div>

			)
		} else {
			return (
        <div className="task-list">
          <AddItem
            categoryId = {this.props.category.id}
            placeholder="Enter new task title"
            history={this.props.history}/>
          <div className="task-wrap">
						{
							this.props.category.tasks.map((item, i) => {
								return <Task key = {i} data = {item} category = {this.props.category.id}/>
							})
						}
          </div>
        </div>
			)
		}
  }


}


const mapStateToProps = (state) => ({
	activeCategoryData: state.activeCategoryData
});

export default connect(mapStateToProps, {getCategory})(TaskList);




