import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import CategoryList from '../containers/CategoryList.jsx';

class MainRoute extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
		return (
      <div>
        <Route
          path="/"
          component= {({ params } ) => {

						return !this.props.categories ? '' : (
              <CategoryList
                data={this.props.categories}
              />
						)

					}}
        />
      </div>
		);
  }
}


const mapStateToProps = (state) => ({
	categories: state.categories,
});

export default withRouter(connect(mapStateToProps)(MainRoute));