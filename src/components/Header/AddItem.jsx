import React, { Component } from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if(!this.elName.value) {
      return false;
    }

    this.props.getNewCategory(this.elName.value, this.props.categoryId, this.props.history || '');
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

export default AddItem;