import React from 'react';
import classes from './SearchBar.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
const searchbar = (props) => {
  //JSX
  return (
      <div className = {bootstrap['form-group']}>
        <input type="text"
          className={bootstrap['form-control']}
          placeholder="Filtra tus negocios"
          value ={props.value}
          onChange= {props.filter}/>
      </div>
  )
};

export default searchbar;
