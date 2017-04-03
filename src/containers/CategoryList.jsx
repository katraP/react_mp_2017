import React, {Component} from 'react';

import Category from '../components/Category.jsx'

class CategoryList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="category-wrap">
        {this.props.data.map((item, i) => {
          return <Category key = {i} data = {item}/>
        })
        }
      </div>
    )

  }
}

export default CategoryList;