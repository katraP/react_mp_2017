import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import Category from '../components/Category.jsx'
import TaskList from './TaskList.jsx'
import AddItem from '../components/Header/AddItem.jsx';

class CategoryList extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const _this = this;

    return (
      <div className="main">
        <div>
          <AddItem getNewCategory = {this.props.getNewCategory} placeholder="Enter category title"/>
            <div className="category-wrap">

              {this.props.data.map((item, i) => {
                return (
                    <Category key = {i} data = {item}/>
                )
              })
              }
            </div>
        </div>
        <Route path="/category/:category" component={({ match } ) => {
            const currentCategory = match.params.category.split('.');

            currentCategory.foreach(item  => {

            });
            const tasksData = _this.props.data[currentCategory].tasks;

            return <TaskList data = {tasksData} />
          }} />

      </div>
    )

  }
}

export default CategoryList;