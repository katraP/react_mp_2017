import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import Modal from 'react-modal';

import { getCategory } from '../utils';

export default class AddCategoryRoute extends React.Component {
  constructor(props) {
    super(props);

    this.addCategory = this.addCategory.bind(this);
  }


  addCategory(categoryParam, history) {
    const currentCategory = getCategory(categoryParam, this.props.data).category;

    currentCategory.subCategories.unshift(
      {
        id: `${currentCategory.id}.${currentCategory.subCategories.length + 1}`,
        isActive: false,
        isDone: false,
        title: this.modalCatField.value,
        subCategories: [],
        tasks: []
      }
    );

    this.props.setCategoryNumber(true);
    history.push(`/category/${categoryParam}`);
  }

  render() {
    return (
      <div>
        <Route path="/category/:category/add" component={({ match, history } ) => {
                const categoryParam = match.params.category;
                const category = getCategory(categoryParam, this.props.data).category;

                return <Modal
                  className="modal-category"
                  isOpen={true}
                  contentLabel="Modal"
                  >
                  <Link to={`/category/${categoryParam}`}>&#10060;</Link>
                  <h3>New category:</h3>
                  <input type="text" ref={(input) => { this.modalCatField = input; }} defaultValue=''/>
                  <button onClick={() => this.addCategory(categoryParam, history)}>Save</button>
                </Modal>
              }}
          />
      </div>
    );
  }
}
