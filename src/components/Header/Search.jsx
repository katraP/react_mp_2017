import React from 'react';

function Search(props) {
  return (
    <div className="header-search">
      <label>
        <input type="checkbox"/> Show done
      </label>

      <input type="text" placeholder="Search" className="header-search__field"/>
    </div>
  )
}

export default Search;