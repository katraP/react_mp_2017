import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category">
        <div>
          <Link to={`/category/${this.props.data.id}`}>{this.props.data.title}</Link>
          <button className="category__edit"></button>
        </div>
        <div>
          <button className="category__del">&#10060;</button>
          <button className="category__add">+</button>
        </div>
      </div>
    )
  }
}

export default Category;