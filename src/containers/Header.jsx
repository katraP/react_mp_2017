import React from 'react';

import Search from '../components/Header/Search.jsx';
import ProgressBar from '../components/Header/ProgressBar.jsx';
import AddItem from '../components/Header/AddItem.jsx';

function Header(props) {
  return (
    <div className="header">
      <div className="header-search-wrap">
        <h1 className="header__title">To-Do List</h1>
        <Search />
      </div>
      <ProgressBar />
      <div className="header-add-item-wrap">
        <AddItem getNewCategory = {props.getNewCategory} placeholder="Enter category title"/>
        <AddItem placeholder="Text input with button" />
      </div>
    </div>
  )
}

export default Header;