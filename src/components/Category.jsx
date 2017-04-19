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
          <Link to={`/category/${this.props.data.id}/edit`}>
            <button className="category__edit"></button>
          </Link>
        </div>
        <div>
          <Link to={`/category/${this.props.data.id}/del`}>
            <button className="category__del">&#10060;</button>
          </Link>
          <Link to={`/category/${this.props.data.id}/add`}>
            <button className="category__add">+</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Category;