import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Route, Switch, Link, withRouter } from 'react-router-dom';
import TaskList from '../containers/TaskList.jsx'

import Modal from 'react-modal';
import {getCategory} from '../utils';
import {addSubCategory, delCategory, editCategory } from '../actions';

class CategoryRoute extends React.Component {
  constructor(props) {
    super(props);
  }

	addCategory(categoryParam, history) {
		this.props.addSubCategory({
			category: categoryParam,
			title: this.modalCatField.value
		});
		history.push(`/category/${categoryParam}`);
	}

	editCategory(categoryParam, history) {
  	this.props.editCategory({
			category: categoryParam,
			title: this.modalCatField.value});
		history.push(`/category/${categoryParam}`);
	}

  render() {
    return (
      <div>
          <Switch>
            <Route path="/category/:category/search/:search/taskStatus/:status" component={({ match, history } ) => {

              const activeCategory = match.params.category;
              let tasksData = getCategory(activeCategory, this.props.data).category.tasks;
              const searchQuery = match.params.search;
              tasksData = tasksData.filter(item => {
                if(match.params.status == 'complete') {
                  return item.title.indexOf(searchQuery) !== -1 && item.isDone;
                }
                else {
                  return item.title.indexOf(searchQuery) !== -1;
                }
              });
							return <TaskList
                data = {tasksData}
                category={activeCategory}
                history = {history}
              />
              }}
              />
            <Route path="/category/:category/add" component={({ match, history } ) => {
							const categoryParam = match.params.category;

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
						<Route path="/category/:category/edit" component={({ match, history } ) => {
							const categoryParam = match.params.category;
							const category = getCategory(categoryParam, this.props.categories).category;

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
						<Route path="/category/:category/del" component={({ match, history } ) => {
							const categoryParam = match.params.category;

							this.props.delCategory({category: categoryParam});

							history.push("/");

							return <div />;
						}}
						/>
            <Route path="/category/:category" component={({ match, history }) => {
              const activeCategory = match.params.category;
              const category = getCategory(activeCategory, this.props.categories).category;
              return <TaskList
                  category={category}
                  history = {history}
                />
              }}
            />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	categories: state.categories
});

export default withRouter(connect(mapStateToProps, {
  getCategory,
	addSubCategory,
	delCategory,
	editCategory
})(CategoryRoute));