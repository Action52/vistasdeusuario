import React from 'react';
import classes from './ConfigIcon.css';
import icon from './config.png';
const configIcon = (props) => {
  //JSX

  return (
    <div className = {classes.ConfigIcon}>
      <img src={icon} alt ="" onClick={props.configMyInfo}/>
    </div>
  )
};

export default configIcon;
