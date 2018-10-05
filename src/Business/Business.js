import React from 'react';
import classes from './Business.css';
import icon from './iconTemplate.png';
const business = (props) => {
  var image = props.image;

  if(props.image == ""){
    image = icon;
  }

  //JSX
  return (
      <div className = {classes.Business}>
        <center><img src ={image} /></center>
        <center>{props.name}</center>
      </div>
  )
};

export default business;
