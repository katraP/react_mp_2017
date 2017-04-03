import React from 'react';

class Category extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category">
        <button className="category__add">+</button>
        <button className="category__del">Del</button>
        {this.props.data.title}
        <button className="category__edit">Edit</button>
      </div>
    )
  }
}

export default Category;