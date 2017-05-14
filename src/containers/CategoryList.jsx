import React, {Component} from 'react';

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
                    <CategoryList data = {item.subCategories} />
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