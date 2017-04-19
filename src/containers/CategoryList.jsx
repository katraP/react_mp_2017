import React, {Component} from 'react';
import { Route, Link, Redirect } from 'react-router-dom';


import Category from '../components/Category.jsx'

class CategoryList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="category-wrap">
        {this.props.data.length ? this.props.data.map((item, i) => {
          return (
            <div key={item.id}>
              <Category data = {item} />
              {
                item.subCategories.length ? (
                  <div className="category-nested">
                    <CategoryList  data = {item.subCategories} getNewCategory = {this.props.getNewCategory} />
                  </div>
                )
                  : ''
              }

            </div>
          )
        }) :''
        }
      </div>
    )

  }
}

export default CategoryList;