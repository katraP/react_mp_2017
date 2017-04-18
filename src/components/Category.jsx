import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: false
    };

  }

  openEditModalWindow(categoryId, categoryName, action) {

    this.props.changeCategory({
      categoryChange: {
        isModalOpen: true,
        categoryId,
        categoryName,
        action
      }
    });
  }

  render() {
    const subCategoriesData = this.props.data.subCategories;
    let subCategoriesItems = '';

    if(subCategoriesData) {

      subCategoriesItems = subCategoriesData.map((item, i) => {
        return (
          <div className="category" key = {i}>
              <div>
                <Link to={`/category/${item.id}`}>{item.title}</Link>
                <button className="category__edit" onClick={() => {this.openEditModalWindow(item.id, item.title, 'edit');}}></button>
              </div>
              <div>
                <button className="category__del">&#10060;</button>
                <button className="category__add" onClick={() => {this.openEditModalWindow(item.id, '', 'add');}}>+</button>
              </div>
          </div>

        );
      });
    }

    return (
      <div>
        <div className="category">
          <div>
            <Link to={`/category/${this.props.data.id}`}>{this.props.data.title}</Link>
            <button
              className="category__edit"
              onClick={() => {this.openEditModalWindow(this.props.data.id, this.props.data.title, 'edit');}}></button>
          </div>
          <div>
            <button className="category__del">&#10060;</button>
            <button
              className="category__add"
              onClick={() => {this.openEditModalWindow(this.props.data.id, '', 'add');}}>+</button>
          </div>
        </div>
        {subCategoriesItems.length ? (<div className="sub-category">{subCategoriesItems}</div>) : ''}
      </div>

    )
  }
}

export default Category;