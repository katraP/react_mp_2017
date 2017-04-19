import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { getCategory } from '../utils';

export default function DelCategoryRoute(props) {
  return (
    <div>
      <Route path="/category/:category/del" component={({ match, history } ) => {
                const categoryParam = match.params.category;
                const categoryData = getCategory(categoryParam, props.data);
                const category = categoryData.category;
                const parentCategory = categoryData.parent;

                const categoryPositionInDataArray =parentCategory.indexOf(category);

                parentCategory.splice(categoryPositionInDataArray, 1);
                props.setCategoryNumber(false);

                history.push("/");

                return <div>dsdssd</div>;
              }}
        />
    </div>
  )
}