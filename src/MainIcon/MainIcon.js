import React from 'react';
import classes from './MainIcon.css';
import icon from './mainIcon.png';
const mainIcon = (props) => {
  //JSX
  return (
    <div className = {classes.MainIcon}>
      <img src={icon} alt =""/>
    </div>
  )
};

export default mainIcon;
