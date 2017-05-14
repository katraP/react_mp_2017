import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTask} from '../../actions';
class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if(!this.elName.value) {
      return false;
    }

		if(this.props.categoryId) {
    	this.props.addTask({
				categoryId: this.props.categoryId,
				value: this.elName.value
			});

			this.props.history.push(`/category/${this.props.categoryId}`);
		}
		else {

    	let counter = this.props.categoryCounter;

			this.props.addNewCategory({
				category: {
					id: (++counter).toString(),
					isActive: false,
					isDone: true,
					title: this.elName.value,
					subCategories: [],
					tasks: []
				},
				counter: counter
			});
		}
		this.elName.value = '';
  }

  render() {
    return (
      <div className="header-add-item">
        <input
          type="text"
          placeholder={this.props.placeholder}
          ref={(input) => { this.elName = input; }}
        />
        <button onClick={this.handleChange} type="button">Add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	categoryCounter: state.categoryCounter,
});

export default connect(mapStateToProps, {addTask})(AddItem);