import React from 'react';

function AddItem(props) {
  return (
    <div className="header-add-item">
      <input type="text" placeholder={props.placeholder}/>
      <button type="button">Add</button>
    </div>
  )
}

export default AddItem;