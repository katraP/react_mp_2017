import React, { Component } from 'react';

function ProgressBar(props) {

  const percent = (!props.allCategories) ? 100 : props.completedCategories * 100 / props.allCategories;

  return (
    <div className="header-progress-bar">
      <div className="header-progress-bar__process" style={{width: `${percent}%`}}></div>
    </div>
  )
}

export default ProgressBar;