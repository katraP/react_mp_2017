import React from 'react';

function Search(props) {
  return (
    <div className="header-search">
      <label>
        <input type="checkbox"/> Show done
      </label>

      <input type="text" placeholder="Search"/>
    </div>
  )
}

export default Search;