import React from 'react';

import { Route } from 'react-router-dom';
import CategoryList from '../containers/CategoryList.jsx';

function MainRoute(props) {
  return (
    <div>
      <Route path="/"
             component= {({ params } ) => {
                  return <CategoryList
                  data = {props.data}
                  getNewCategory = {props.getNewCategory}/>
                }}
        />
    </div>
  );
}

export default MainRoute;