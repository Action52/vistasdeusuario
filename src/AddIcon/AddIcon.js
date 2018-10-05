import React from 'react';
import classes from './AddIcon.css';
import icon from './addIcon.png';
const addIcon = (props) => {
  //JSX
  return (
    <div className = {classes.AddIcon}>
      <img src={icon} alt ="" />
    </div>
  )
};

export default addIcon;
