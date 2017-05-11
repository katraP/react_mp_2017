import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import Modal from 'react-modal';

import { getCategory } from '../utils';

export default class EditCategoryRoute extends React.Component {
  constructor(props) {
    super(props);

    this.editCategory = this.editCategory.bind(this);
  }

  editCategory(categoryParam, history) {
    const currentCategory = getCategory(categoryParam, this.props.data).category;

    currentCategory.title=this.modalCatField.value;
    history.push(`/category/${categoryParam}`);
  }

  render() {
    return (
      <div>
        <Route path="/category/:category/edit" component={({ match, history } ) => {
          const categoryParam = match.params.category;
          const category = getCategory(categoryParam, this.props.data).category;

          return <Modal
            className="modal-category"
            isOpen={true}
            contentLabel="Modal"
            >
            <Link className="modal-close" to={`/category/${categoryParam}`}>&#10060;</Link>
            <h3>Edit category:</h3>
            <input type="text" ref={(input) => { this.modalCatField = input; }} defaultValue={category.title}/>
            <button onClick={() => this.editCategory(categoryParam, history)}>Save</button>
          </Modal>
        }}
        />
      </div>
    );
  }
}
