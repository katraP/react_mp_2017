import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import TaskList from '../containers/TaskList.jsx'

import { getCategory } from '../utils';

class CategoryRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <Switch>
            <Route path="/category/:category/search/:search/taskStatus/:status" component={({ match, history } ) => {

              const activeCategory = match.params.category;
              let tasksData = getCategory(activeCategory, this.props.data).category.tasks;
              const searchQuery = match.params.search;
              tasksData = tasksData.filter(item => {
                if(match.params.status == 'complete') {
                  return item.title.indexOf(searchQuery) !== -1 && item.isDone;
                }
                else {
                  return item.title.indexOf(searchQuery) !== -1;
                }
              });

              return <TaskList
                        addNewTask={this.props.addNewTask}
                        data = {tasksData}
                        category={activeCategory}
                        history = {history}
                      />
              }}
              />
            <Route path="/category/:category" component={({ match, history } ) => {
              const activeCategory = match.params.category;
              const tasksData = getCategory(activeCategory, this.props.data).category.tasks;

              return <TaskList
                        addNewTask={this.props.addNewTask}
                        data = {tasksData}
                        category={activeCategory}
                        history = {history}
                      />
              }}
            />
          </Switch>

      </div>
    );
  }
}

export default CategoryRoute;