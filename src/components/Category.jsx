import React from 'react';

class Category extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const subCategoriesData = this.props.data.subCategories;
    let subCategoriesItems = '';

    if(subCategoriesData) {

      subCategoriesItems = subCategoriesData.map((item, i) => {
        return (
          <div className="category" key = {i}>
            <div>
              {item.title}
              <button className="category__edit"></button>
            </div>
            <div>
              <button className="category__del">&#10060;</button>
              <button className="category__add">+</button>
            </div>
          </div>
        );
      });
    }

    console.log(subCategoriesItems);



    return (
      <div>
        <div  className="category">
          <div>
            {this.props.data.title}
            <button className="category__edit"></button>
          </div>
          <div>
            <button className="category__del">&#10060;</button>
            <button className="category__add">+</button>
          </div>
        </div>
        {subCategoriesItems.length ? (<div className="sub-category">{subCategoriesItems}</div>) : ''}
      </div>

    )
  }
}

export default Category;