import React, { Component } from 'react';

class Search extends React.Component{

  constructor(props) {
    super(props);
    this.searchTasks = this.searchTasks.bind(this);
  }

  searchTasks() {

    this.props.searchTasks(this.searchQuery.value, this.searchTasksStatus.checked);
  }

  render() {
    return (
      <div className="header-search">
        <label>
          <input type="checkbox" ref={(input) => {this.searchTasksStatus = input;}} onChange={this.searchTasks}/> Show done
        </label>

        <input type="text" ref={(input) => {this.searchQuery = input;}}
               placeholder="Search" onChange={this.searchTasks} className="header-search__field"/>
      </div>
    )
  }
}

export default Search;